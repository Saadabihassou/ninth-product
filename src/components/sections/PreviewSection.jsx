import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Eye } from 'lucide-react';
    import { Link as ScrollLink } from 'react-scroll';

    const PreviewSection = () => {
      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
        viewport: { once: true, amount: 0.15 }
      };
      const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        viewport: { once: true, amount: 0.3 }
      };

      const chapterExcerpts = [
        {
          title: "Chapter 1: The Sundered Veil",
          excerpt: "A chill wind whispered through the colossal ruins, carrying tales of an age long past. Lyra adjusted her chronometer, its gentle hum a stark contrast to the silence of this forgotten world. The Veil, they called it - a place where time itself seemed to unravel..."
        },
        {
          title: "Chapter 7: City of Whispering Gears",
          excerpt: "Jax navigated the steam-filled alleys of Cogsworth, a metropolis built on clockwork marvels. Every tick and whirr was a heartbeat of the city, but a discordant rhythm had begun to emerge, a secret hidden within the Grand Orrery that threatened to stop time itself..."
        },
        {
          title: "Chapter 15: The Oracle of Yesterday",
          excerpt: "Deep within the Crystal Caves, where echoes of past and future converged, Elara sought the Oracle. Its voice, a chorus of a thousand moments, spoke of choices yet to be made, of destinies intertwined, and of a single thread that could mend or break eternity..."
        }
      ];

      return (
        <section id="preview" className="py-16 md:py-24 bg-gradient-to-br from-warm-100 via-golden-light to-amber-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black overflow-hidden">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={sectionAnimation.viewport}
            variants={sectionAnimation}
            className="container mx-auto px-6 sm:px-8 lg:px-12 text-center"
          >
            <motion.h2 
              variants={itemAnimation} 
              className="text-3xl sm:text-4xl font-bold mb-4 pb-2 text-warm-700 dark:text-warm-200 border-b-2 border-orange-500 dark:border-amber-500 inline-block"
            >
              Sneak <span className="gradient-text">Peek Inside</span>
            </motion.h2>
            <motion.p 
              variants={itemAnimation} 
              className="text-lg text-warm-600 dark:text-warm-400 max-w-3xl mx-auto mb-12"
            >
              Get a taste of the adventure that awaits. Here are a few excerpts from "Echoes of Eternity" to whet your appetite.
            </motion.p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {chapterExcerpts.map((chapter, index) => (
                <motion.div 
                  key={index}
                  variants={itemAnimation}
                  className="bg-white/50 dark:bg-neutral-800/50 p-6 rounded-lg shadow-xl hover:shadow-2xl dark:shadow-black/30 dark:hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-warm-700 dark:text-warm-200 mb-3 text-left">{chapter.title}</h3>
                  <p className="text-warm-600 dark:text-warm-400 leading-relaxed flex-grow text-left">{chapter.excerpt}</p>
                  <div className="mt-4 text-left">
                    <Button variant="link" className="text-warm-500 dark:text-amber-400 hover:text-warm-600 dark:hover:text-amber-300 p-0">
                      Read more (sample) <Eye size={16} className="ml-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemAnimation} className="text-center mt-12">
              <ScrollLink to="purchase" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-warm-500 to-amber-600 hover:from-warm-600 hover:to-amber-700 text-white dark:text-neutral-900 shadow-lg hover:shadow-xl dark:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300">
                  Want to Read More? Buy The Book!
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </section>
      );
    };

    export default PreviewSection;