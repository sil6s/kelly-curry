import Approach from '@/components/Approach';
import Contact from '@/components/Contact';
import CouchBand from '@/components/CouchBand';
import Fees from '@/components/Fees';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Office from '@/components/Office';
import Services from '@/components/Services';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Services />
        <CouchBand />
        <Fees />
        <Office />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
