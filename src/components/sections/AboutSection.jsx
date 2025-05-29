import React from 'react';
    import { motion } from 'framer-motion';
    import { BookText, Zap, Users } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    const AboutSection = () => {
      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
        viewport: { once: true, amount: 0.2 }
      };
      const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
         viewport: { once: true, amount: 0.3 }
      };

      const features = [
        {
          icon: <BookText className="h-10 w-10 text-warm-500 dark:text-amber-400" />,
          title: "Engaging Plot",
          description: "A multi-layered narrative that keeps you guessing until the very end. Twists and turns abound!"
        },
        {
          icon: <Zap className="h-10 w-10 text-warm-500 dark:text-amber-400" />,
          title: "Vivid World-Building",
          description: "Immerse yourself in a richly detailed world, brought to life with stunning prose and imaginative descriptions."
        },
        {
          icon: <Users className="h-10 w-10 text-warm-500 dark:text-amber-400" />,
          title: "Compelling Characters",
          description: "Meet a diverse cast of characters, each with their own motivations, flaws, and heroic moments."
        }
      ];

      return (
        <section id="about" className="py-16 md:py-24 bg-warm-50 dark:bg-neutral-900/30 overflow-hidden">
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
              About <span className="gradient-text">The Book</span>
            </motion.h2>
            <motion.p 
              variants={itemAnimation} 
              className="text-lg text-warm-600 dark:text-warm-400 max-w-3xl mx-auto mb-12"
            >
              "Echoes of Eternity" is more than just a story; it's an experience. Dive deep into a realm where ancient prophecies collide with modern dilemmas, and where the courage of a few can change the fate of many.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div variants={itemAnimation} key={index}>
                  <Card className="h-full bg-white/50 dark:bg-neutral-800/50 shadow-lg hover:shadow-xl dark:shadow-black/30 dark:hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                      <div className="p-3 bg-warm-100/70 dark:bg-neutral-700/70 rounded-full">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-warm-700 dark:text-warm-200">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-left">
                      <p className="text-warm-600 dark:text-warm-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      );
    };

    export default AboutSection;