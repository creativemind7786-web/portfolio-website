/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SEOScore from './components/SEOScore';
import Portfolio from './components/Portfolio';
import AuditBanner from './components/AuditBanner';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen text-light font-sans selection:bg-primary/30 selection:text-white">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SEOScore />
        <Portfolio />
        <AuditBanner />
        <Tools />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
