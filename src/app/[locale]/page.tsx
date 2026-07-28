import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Offer from '@/components/Offer';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AosInit from '@/components/AosInit';

export default function HomePage() {
  return (
    <SmoothScroll>
      <AosInit />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Reviews />
        <FAQ />
        <Offer />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
