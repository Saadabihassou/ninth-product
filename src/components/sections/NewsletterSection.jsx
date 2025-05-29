import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Mail } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const NewsletterSection = () => {
      const [email, setEmail] = useState('');
      const { toast } = useToast();

      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
        viewport: { once: true, amount: 0.2 }
      };
      const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        viewport: { once: true, amount: 0.3 }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
          console.log('Subscribing email:', email);
          toast({
            title: "Subscribed! (Sample)",
            description: `Thank you for subscribing with ${email}. You'll get the latest updates.`,
            duration: 5000,
          });
          setEmail('');
        } else {
          toast({
            title: "Invalid Email",
            description: "Please enter a valid email address.",
            variant: "destructive",
            duration: 3000,
          });
        }
      };

      return (
        <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-br from-warm-200 via-amber-200 to-golden-light dark:from-neutral-900 dark:via-neutral-800/70 dark:to-neutral-900 overflow-hidden">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={sectionAnimation.viewport}
            variants={sectionAnimation}
            className="container mx-auto px-6 sm:px-8 lg:px-12 text-center"
          >
            <motion.div variants={itemAnimation}>
              <Mail className="h-16 w-16 text-warm-500 dark:text-amber-400 mx-auto mb-6" />
            </motion.div>
            <motion.h2 
              variants={itemAnimation} 
              className="text-3xl sm:text-4xl font-bold mb-4 pb-2 text-warm-800 dark:text-warm-100 border-b-2 border-orange-500 dark:border-amber-500 inline-block"
            >
              Stay <span className="gradient-text">Updated</span>
            </motion.h2>
            <motion.p 
              variants={itemAnimation} 
              className="text-lg text-warm-700 dark:text-warm-300 max-w-2xl mx-auto mb-8"
            >
              Subscribe to our newsletter for the latest news, exclusive content, and special offers related to "Echoes of Eternity" and future works by Alex Sterling.
            </motion.p>
            <motion.form 
              variants={itemAnimation} 
              onSubmit={handleSubmit} 
              className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 items-center p-2 bg-white/30 dark:bg-neutral-800/30 rounded-lg shadow-lg dark:shadow-black/30 backdrop-blur-sm"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow text-lg p-4 h-14 bg-white/70 dark:bg-neutral-700/70 border-warm-300 dark:border-neutral-600/50 focus:ring-warm-500 dark:focus:ring-amber-400 placeholder:text-warm-400 dark:placeholder:text-neutral-400"
                aria-label="Email for newsletter"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="text-lg px-8 py-4 h-14 bg-gradient-to-r from-warm-500 to-amber-600 hover:from-warm-600 hover:to-amber-700 text-white dark:text-neutral-900 shadow-md hover:shadow-lg dark:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </Button>
            </motion.form>
          </motion.div>
        </section>
      );
    };

    export default NewsletterSection;