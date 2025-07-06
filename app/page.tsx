import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}