import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter }
      from '@/components/ui/card';
    import { ShoppingCart, Book, Gift } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';


    const PurchaseSection = () => {
      const { toast } = useToast();

      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
        viewport: { once: true, amount: 0.15 }
      };
      const cardAnimation = {
        initial: { opacity: 0, y: 30, scale: 0.9 },
        whileInView: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 120, damping: 15 } },
        viewport: { once: true, amount: 0.3 }
      };
       const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        viewport: { once: true, amount: 0.3 }
      };


      const pricingOptions = [
        {
          title: "Ebook Edition",
          price: "$12.99",
          features: ["Instant Download", "Read on Any Device", "Exclusive Digital Art"],
          icon: <Book className="h-8 w-8 text-warm-500 dark:text-amber-400" />,
          cta: "Buy Ebook",
          color: "bg-gradient-to-br from-amber-400 to-warm-500 dark:from-amber-500 dark:to-yellow-600",
          shadow: "shadow-lg shadow-amber-500/30 dark:shadow-yellow-600/30"
        },
        {
          title: "Hardcover Edition",
          price: "$24.99",
          features: ["Premium Hardcover", "Dust Jacket Art", "Signed by Author (First 100)"],
          icon: <ShoppingCart className="h-8 w-8 text-warm-500 dark:text-amber-400" />,
          cta: "Order Hardcover",
          color: "bg-gradient-to-br from-warm-500 to-orange-500 dark:from-orange-500 dark:to-red-600",
          shadow: "shadow-lg shadow-orange-500/30 dark:shadow-red-600/30",
          popular: true,
        },
        {
          title: "Deluxe Bundle",
          price: "$49.99",
          features: ["Signed Hardcover", "Ebook Included", "World Map Poster", "Audiobook Access"],
          icon: <Gift className="h-8 w-8 text-warm-500 dark:text-amber-400" />,
          cta: "Get The Bundle",
          color: "bg-gradient-to-br from-orange-500 to-red-500 dark:from-red-600 dark:to-rose-700",
          shadow: "shadow-lg shadow-red-500/30 dark:shadow-rose-700/30"
        }
      ];
      
      const handlePurchase = (optionTitle) => {
        toast({
          title: "Purchase Initiated (Sample)",
          description: `You've selected the ${optionTitle}. This is a demo, no actual purchase will be made.`,
          duration: 5000,
        });
        console.log(`Attempting to purchase ${optionTitle}`);
      };


      return (
        <section id="purchase" className="py-16 md:py-24 bg-warm-50 dark:bg-neutral-900/30 overflow-hidden">
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
              Get Your <span className="gradient-text">Copy Today!</span>
            </motion.h2>
            <motion.p 
              variants={itemAnimation} 
              className="text-lg text-warm-600 dark:text-warm-400 max-w-3xl mx-auto mb-12"
            >
              Choose the edition that's right for you and start your adventure with "Echoes of Eternity".
            </motion.p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {pricingOptions.map((option, index) => (
                <motion.div variants={cardAnimation} key={index} className={`flex ${option.popular ? 'lg:scale-105 z-10' : 'z-0'}`}>
                  <Card className={`w-full flex flex-col bg-white/70 dark:bg-neutral-800/70 shadow-xl hover:shadow-2xl dark:shadow-black/40 dark:hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm ${option.popular ? 'border-4 border-warm-500 dark:border-amber-400' : 'border-transparent dark:border dark:border-neutral-700/50'}`}>
                    {option.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-warm-500 dark:bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        MOST POPULAR
                      </div>
                    )}
                    <CardHeader className="text-center pt-8">
                      <div className="inline-block p-3 bg-warm-100/80 dark:bg-neutral-700/80 rounded-full mx-auto mb-4">
                        {option.icon}
                      </div>
                      <CardTitle className="text-2xl text-warm-700 dark:text-warm-200">{option.title}</CardTitle>
                      <CardDescription className="text-4xl font-bold text-warm-600 dark:text-amber-300 py-2">{option.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 text-warm-600 dark:text-warm-400">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto p-6">
                      <Button 
                        size="lg" 
                        className={`w-full text-lg py-3 ${option.color} text-white dark:text-neutral-900 shadow-lg hover:shadow-xl ${option.shadow} transform hover:scale-105 transition-all duration-300`}
                        onClick={() => handlePurchase(option.title)}
                      >
                        {option.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.p 
              variants={itemAnimation} 
              className="text-center text-sm text-warm-500 dark:text-warm-500 mt-12"
            >
              Secure payments processed by Stripe (Demo). All major credit cards accepted.
            </motion.p>
          </motion.div>
        </section>
      );
    };

    export default PurchaseSection;