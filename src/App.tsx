import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Collection, { sarees, kurtis } from '@/components/Collection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Collection
          id="sarees"
          title="Our Saree Collection"
          subtitle="From bridal silks to everyday cottons — sarees that drape you in elegance and tradition."
          products={sarees}
        />
        <Collection
          id="kurtis"
          title="Our Kurti Collection"
          subtitle="Comfortable, stylish, and versatile kurtis for every occasion — from casual outings to festive celebrations."
          products={kurtis}
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
