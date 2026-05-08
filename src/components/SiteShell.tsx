'use client';

import { useState } from 'react';
import Approach from './Approach';
import ConsultationModal from './ConsultationModal';
import Contact from './Contact';
import CouchBand from './CouchBand';
import Fees from './Fees';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HelpWith from './HelpWith';
import LocationArrival from './LocationArrival';
import MeetKelly from './MeetKelly';
import Office from './Office';
import PatientResourcesPreview from './PatientResourcesPreview';
import ProcessSteps from './ProcessSteps';
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
        <HelpWith />
        <CouchBand />
        <ProcessSteps
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
        <PatientResourcesPreview />
        <Contact />
        <Fees />
        <Office />
        <LocationArrival
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
