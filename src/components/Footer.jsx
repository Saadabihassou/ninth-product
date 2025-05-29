
    import React from 'react';
    import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      };

      return (
        <motion.footer 
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-warm-100 dark:bg-neutral-800 text-warm-700 dark:text-warm-300 py-12 border-t border-warm-200 dark:border-neutral-700"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-7 w-7 text-warm-600 dark:text-warm-400 mr-2" />
                  <span className="text-xl font-serif font-semibold">Book Title</span>
                </div>
                <p className="text-sm text-center md:text-left text-warm-600 dark:text-warm-400">
                  An unforgettable journey into a world of wonder.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-center md:text-left">Contact Us</p>
                <ul className="space-y-2 text-sm text-center md:text-left">
                  <li className="flex items-center justify-center md:justify-start">
                    <Mail size={18} className="mr-2 text-warm-500 dark:text-warm-400" />
                    <span>contact@booktitle.com</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <Phone size={18} className="mr-2 text-warm-500 dark:text-warm-400" />
                    <span>+1 (234) 567-8900</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <MapPin size={18} className="mr-2 text-warm-500 dark:text-warm-400" />
                    <span>123 Bookworm Lane, Reader City</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-center md:text-left">Quick Links</p>
                <ul className="space-y-2 text-sm text-center md:text-left">
                  <li><a href="#about" className="hover:text-warm-500 dark:hover:text-warm-200 transition-colors">About</a></li>
                  <li><a href="#preview" className="hover:text-warm-500 dark:hover:text-warm-200 transition-colors">Preview</a></li>
                  <li><a href="#author" className="hover:text-warm-500 dark:hover:text-warm-200 transition-colors">Author</a></li>
                  <li><a href="#reviews" className="hover:text-warm-500 dark:hover:text-warm-200 transition-colors">Reviews</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-warm-300 dark:border-neutral-700 pt-8 text-center">
              <p className="text-sm text-warm-600 dark:text-warm-400">
                &copy; {currentYear} Book Title. All rights reserved.
              </p>
              <p className="text-xs text-warm-500 dark:text-warm-500 mt-1">
                Designed with <span className="text-red-500">&hearts;</span> by Hostinger Horizons
              </p>
            </div>
          </div>
        </motion.footer>
      );
    };

    export default Footer;
  