
    import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import AboutSection from '@/components/sections/AboutSection';
    import PreviewSection from '@/components/sections/PreviewSection';
    import AuthorSection from '@/components/sections/AuthorSection';
    import ReviewsSection from '@/components/sections/ReviewsSection';
    import PurchaseSection from '@/components/sections/PurchaseSection';
    import NewsletterSection from '@/components/sections/NewsletterSection';

    const HomePage = () => {
      return (
        <>
          <HeroSection />
          <AboutSection />
          <PreviewSection />
          <AuthorSection />
          <ReviewsSection />
          <PurchaseSection />
          <NewsletterSection />
        </>
      );
    };

    export default HomePage;
  