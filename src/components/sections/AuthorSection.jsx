import React from 'react';
    import { motion } from 'framer-motion';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { PenTool, Twitter, Linkedin, Globe } from 'lucide-react';

    const AuthorSection = () => {
      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 } },
        viewport: { once: true, amount: 0.2 }
      };
      const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        viewport: { once: true, amount: 0.3 }
      };
      const imageAnimation = {
        initial: { opacity: 0, scale: 0.8, x: -50 },
        whileInView: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
        viewport: { once: true, amount: 0.3 }
      };
       const textBlockAnimation = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        viewport: { once: true, amount: 0.3 }
      };


      return (
        <section id="author" className="py-16 md:py-24 bg-warm-50 dark:bg-neutral-900/30 overflow-hidden">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={sectionAnimation.viewport}
            variants={sectionAnimation}
            className="container mx-auto px-6 sm:px-8 lg:px-12 text-center"
          >
            <motion.h2 
              variants={itemAnimation} 
              className="text-3xl sm:text-4xl font-bold mb-12 pb-2 text-warm-700 dark:text-warm-200 border-b-2 border-orange-500 dark:border-amber-500 inline-block"
            >
              Meet The <span className="gradient-text">Author</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div 
                variants={imageAnimation}
                className="md:col-span-1 flex justify-center"
              >
                <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-warm-300 dark:border-amber-600 shadow-xl dark:shadow-black/40">
                  <AvatarImage asChild>
                    <img  alt="Author Alex Sterling, a thoughtful person in a library setting" className="object-cover" src="https://images.unsplash.com/photo-1693246391475-31be45883f77" />
                  </AvatarImage>
                  <AvatarFallback className="text-4xl bg-warm-200 dark:bg-neutral-700 text-warm-700 dark:text-warm-200">AS</AvatarFallback>
                </Avatar>
              </motion.div>

              <motion.div 
                variants={textBlockAnimation}
                className="md:col-span-2 text-left"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-warm-700 dark:text-warm-200 mb-3">Alex Sterling</h3>
                <p className="text-warm-600 dark:text-warm-400 mb-4 leading-relaxed">
                  Alex Sterling is a visionary storyteller, known for crafting intricate narratives that blend history, mythology, and speculative fiction. With a background in archaeology and a lifelong fascination with ancient civilizations, Alex infuses their work with authenticity and a profound sense of wonder.
                </p>
                <p className="text-warm-600 dark:text-warm-400 mb-6 leading-relaxed">
                  "Echoes of Eternity" is Alex's debut novel, born from years of exploring forgotten ruins and deciphering cryptic texts. Alex hopes to transport readers to worlds beyond imagination and to explore the timeless questions of destiny and human resilience.
                </p>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:text-warm-700 dark:text-amber-400 dark:hover:text-amber-200 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:text-warm-700 dark:text-amber-400 dark:hover:text-amber-200 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:text-warm-700 dark:text-amber-400 dark:hover:text-amber-200 transition-colors">
                    <Globe size={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:text-warm-700 dark:text-amber-400 dark:hover:text-amber-200 transition-colors">
                    <PenTool size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      );
    };

    export default AuthorSection;