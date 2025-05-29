import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { Star } from 'lucide-react';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

    const ReviewsSection = () => {
      const sectionAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 } },
        viewport: { once: true, amount: 0.15 }
      };
      const itemAnimation = {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "spring", stiffness:150, damping: 20 } },
        viewport: { once: true, amount: 0.3 }
      };

      const reviews = [
        {
          name: "Jordan B.",
          title: "An Absolute Triumph!",
          rating: 5,
          comment: "I was completely captivated by 'Echoes of Eternity'. The characters are richly drawn, and the plot is a masterclass in suspense. A new favorite!",
          avatarImage: "Jordan B. smiling, casual setting",
          avatarFallback: "JB"
        },
        {
          name: "Casey L.",
          title: "Mind-Bending and Beautiful",
          rating: 5,
          comment: "Alex Sterling has created a world so vivid, I felt like I was living in it. The concepts are profound, and the story is unforgettable.",
          avatarImage: "Casey L. thoughtful expression, outdoor background",
          avatarFallback: "CL"
        },
        {
          name: "Riley M.",
          title: "A Must-Read Epic",
          rating: 4,
          comment: "If you love sweeping sagas with deep lore and thrilling action, this book is for you. The pacing is excellent, and I'm eagerly awaiting a sequel!",
          avatarImage: "Riley M. enthusiastic, holding a book",
          avatarFallback: "RM"
        },
      ];

      const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
          <Star key={i} size={20} className={`mr-1 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-500'}`} />
        ));
      };

      return (
        <section id="reviews" className="py-16 md:py-24 bg-gradient-to-br from-warm-100 via-golden-light to-amber-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black overflow-hidden">
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
              Rave <span className="gradient-text">Reviews</span>
            </motion.h2>
            <motion.p 
              variants={itemAnimation} 
              className="text-lg text-warm-600 dark:text-warm-400 max-w-3xl mx-auto mb-12"
            >
              See what readers are saying about "Echoes of Eternity".
            </motion.p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div variants={itemAnimation} key={index}>
                  <Card className="h-full flex flex-col bg-white/60 dark:bg-neutral-800/60 shadow-xl hover:shadow-2xl dark:shadow-black/40 dark:hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 glassmorphism">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <CardTitle className="text-xl text-warm-700 dark:text-warm-200">{review.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-warm-600 dark:text-warm-400 italic">"{review.comment}"</p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4 border-t border-warm-200/70 dark:border-neutral-700/70">
                      <div className="flex items-center">
                        <Avatar className="w-10 h-10 mr-3 border-2 border-warm-300 dark:border-amber-500">
                           <AvatarImage asChild>
                             <img  alt={`Avatar of ${review.name}`} className="object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                           </AvatarImage>
                           <AvatarFallback className="bg-warm-200 dark:bg-neutral-700 text-warm-700 dark:text-warm-200">{review.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium text-warm-700 dark:text-warm-300">{review.name}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      );
    };

    export default ReviewsSection;