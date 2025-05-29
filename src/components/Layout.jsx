import React from 'react';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';

    const Layout = ({ children }) => {
      return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-warm-50 via-golden-light to-warm-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;