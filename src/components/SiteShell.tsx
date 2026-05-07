'use client';

import { useState } from 'react';
import Approach from './Approach';
import ConsultationModal from './ConsultationModal';
import Contact from './Contact';
import CouchBand from './CouchBand';
import Fees from './Fees';
import Footer from './Footer';
import Hero from './Hero';
import LocationArrival from './LocationArrival';
import MeetKelly from './MeetKelly';
import Header from './Header';
import Office from './Office';
import Services from './Services';

export default function SiteShell() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main>
        <Hero onRequestConsultation={() => setIsConsultationOpen(true)} />
        <MeetKelly />
        <Approach />
        <Services />
        <CouchBand />
        <Fees />
        <Office />
        <LocationArrival
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
        <Contact />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
