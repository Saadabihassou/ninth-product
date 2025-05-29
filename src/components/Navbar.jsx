import React, { useState, useEffect } from 'react';
    import { Link as ScrollLink } from 'react-scroll';
    import { Button } from '@/components/ui/button';
    import { BookOpen, Menu, X, Sun, Moon } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
          const savedMode = localStorage.getItem('darkMode');
          return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false; // Default for SSR or environments without window
      });

      useEffect(() => {
        if (typeof window !== 'undefined') {
          if (darkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          localStorage.setItem('darkMode', JSON.stringify(darkMode));
        }
      }, [darkMode]);

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      const navItems = [
        { id: 'about', label: 'About' },
        { id: 'preview', label: 'Preview' },
        { id: 'author', label: 'Author' },
        { id: 'reviews', label: 'Reviews' },
      ];

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      }, []);

      const navVariants = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
      };
      
      const mobileMenuVariants = {
        open: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.1 } 
        },
        closed: { 
          opacity: 0, 
          y: "-20%", 
          transition: { duration: 0.3, ease: "easeIn" } 
        },
      };

      const mobileLinkVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -20 },
      }

      return (
        <motion.nav 
          variants={navVariants}
          initial="initial"
          animate="animate"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent dark:bg-neutral-950/30'}`}
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-20">
              <ScrollLink to="hero" smooth={true} duration={500} offset={-100} className="flex items-center cursor-pointer group">
                <BookOpen className="h-8 w-8 text-warm-600 dark:text-amber-400 group-hover:text-warm-700 dark:group-hover:text-amber-300 transition-colors" />
                <span className="ml-3 text-2xl font-serif font-bold text-warm-700 dark:text-warm-300 group-hover:text-warm-800 dark:group-hover:text-warm-200 transition-colors">Book Title</span>
              </ScrollLink>
              
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80} 
                    className="text-warm-600 dark:text-warm-300 hover:text-warm-800 dark:hover:text-amber-300 font-medium transition-colors relative group"
                    activeClass="text-warm-800 dark:text-amber-300 font-semibold"
                    spy={true}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-500 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                ))}
                <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="text-warm-600 dark:text-amber-300 hover:bg-warm-100 dark:hover:bg-neutral-800">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="sr-only">Toggle dark mode</span>
                </Button>
                <ScrollLink to="purchase" smooth={true} duration={500} offset={-80}>
                  <Button size="lg" className="bg-gradient-to-r from-warm-500 to-amber-600 hover:from-warm-600 hover:to-amber-700 text-white dark:text-neutral-900 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Buy Now
                  </Button>
                </ScrollLink>
              </div>

              <div className="md:hidden flex items-center">
                <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="mr-2 text-warm-600 dark:text-amber-300 hover:bg-warm-100 dark:hover:bg-neutral-800">
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                  <span className="sr-only">Toggle dark mode</span>
                </Button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-warm-600 dark:text-amber-300 hover:text-warm-800 dark:hover:text-amber-100 focus:outline-none z-50"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className={`md:hidden absolute top-0 left-0 right-0 min-h-screen ${isScrolled || isOpen ? 'bg-white/95 dark:bg-neutral-900/95 shadow-lg backdrop-blur-lg' : 'bg-transparent dark:bg-neutral-950/70'} pt-20 pb-4`} // Changed y to -100% for slide-down
              >
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  {navItems.map((item) => (
                    <motion.div variants={mobileLinkVariants} key={item.id}>
                      <ScrollLink
                        
                        to={item.id}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-xl text-warm-700 dark:text-warm-200 hover:text-warm-800 dark:hover:text-amber-300 font-medium transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                        activeClass="text-warm-800 dark:text-amber-300 font-semibold"
                        spy={true}
                      >
                        {item.label}
                      </ScrollLink>
                    </motion.div>
                  ))}
                  <motion.div variants={mobileLinkVariants}>
                    <ScrollLink to="purchase" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
                      <Button size="lg" className="w-48 bg-gradient-to-r from-warm-500 to-amber-600 hover:from-warm-600 hover:to-amber-700 text-white dark:text-neutral-900 shadow-md text-lg py-3">
                        Buy Now
                      </Button>
                    </ScrollLink>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      );
    };

    export default Navbar;