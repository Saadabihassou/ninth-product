import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Link as ScrollLink } from 'react-scroll';
    import { ArrowDown } from 'lucide-react';

    const HeroSection = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1, 
          transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      
      const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
      };

      return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-warm-100 via-golden-light to-amber-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black">
          <div className="absolute inset-0 opacity-10 dark:opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="scale(1) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(35, 92%, 50%, 0.05)"/><path d="M80 40c0 22.091-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0s40 17.909 40 40zm-10 0c0-16.569-13.431-30-30-30S10 23.431 10 40s13.431 30 30 30 30-13.431 30-30z" fill="hsla(35, 92%, 50%, 0.07)"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10"
          >
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <motion.h1 
                variants={itemVariants} 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-warm-800 dark:text-warm-100"
              >
                Discover <span className="gradient-text">"Echoes of Eternity"</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants} 
                className="text-lg sm:text-xl text-warm-700 dark:text-warm-300 mb-8"
              >
                Journey through time in a spellbinding saga of lost empires, ancient prophecies, and the enduring power of hope. A tale that will echo in your thoughts long after the final page.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <ScrollLink to="purchase" smooth={true} duration={500} offset={-80}>
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-warm-500 to-amber-600 hover:from-warm-600 hover:to-amber-700 text-white dark:text-neutral-900 shadow-xl hover:shadow-2xl dark:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 animate-subtle-pulse">
                    Get Your Copy Now
                  </Button>
                </ScrollLink>
                <ScrollLink to="preview" smooth={true} duration={500} offset={-80}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-warm-500 text-warm-600 hover:bg-warm-500 hover:text-white dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-500 dark:hover:text-black transition-all duration-300">
                    Read Preview
                  </Button>
                </ScrollLink>
              </motion.div>
            </motion.div>
            
            <motion.div variants={imageVariants} className="flex justify-center items-center mt-10 md:mt-0">
              <div className="relative p-2 bg-white/30 dark:bg-neutral-800/20 rounded-lg shadow-2xl dark:shadow-black/50 transform hover:scale-105 transition-transform duration-500 backdrop-blur-sm">
                <img 
                  alt="Book Cover for Echoes of Eternity" 
                  className="rounded-md shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1539090336856-3d4a5e0c19d8" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              <ArrowDown className="h-10 w-10 text-warm-500 dark:text-amber-400 animate-bounce" />
            </ScrollLink>
          </motion.div>
        </section>
      );
    };

    export default HeroSection;