'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import healingHero from '../assets/images/healing-hero.jpg';
import coupleHealing from '../assets/images/couple-healing.jpg';
import therapyStock from '../assets/images/therapy-stock.jpg';
import healingHands from '../assets/images/healing-hands.jpg';
import ConsultationModal from './ConsultationModal';
import Footer from './Footer';
import Header from './Header';
import { SectionEyebrow } from './Atoms';
import {
  getServiceDetail,
  serviceDetails,
  type ServiceDetail,
  type ServiceSlug,
} from '../data/serviceDetails';
import styles from '../styles/Website.module.css';

const IMAGE_BY_SLUG: Record<ServiceSlug, StaticImageData> = {
  'individual-therapy': healingHero,
  'couples-therapy': coupleHealing,
  'family-therapy': therapyStock,
  'coparenting-therapy': healingHands,
};

function schemaFor(service: ServiceDetail) {
  const url = `https://kbc-therapy.com/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://kbc-therapy.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://kbc-therapy.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `${service.title} with Kelly Baker Curry, MSW, MEd, LCSW`,
        url,
        provider: {
          '@type': 'Person',
          name: 'Kelly Baker Curry, MSW, MEd, LCSW',
        },
        areaServed: [
          'Fort Thomas, KY',
          'Northern Kentucky',
          'Kentucky',
          'Ohio',
        ],
        serviceType: service.title,
        description: service.metaDescription,
        offers: {
          '@type': 'Offer',
          price: service.rate.replace('$', ''),
          priceCurrency: 'USD',
          description: service.rateNote,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getServiceDetail(slug);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeInteractive, setActiveInteractive] = useState(0);

  if (!service) return null;

  const relatedServices = serviceDetails.filter(
    (related) => related.slug !== service.slug,
  );

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={`${styles['kbc-page']} ${styles['kbc-subservice-page']}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaFor(service)).replace(/</g, '\\u003c'),
          }}
        />

        <section className={styles['kbc-subservice-hero']}>
          <div className={styles['kbc-subservice-hero-grid']}>
            <div>
              <SectionEyebrow>Services</SectionEyebrow>
              <h1 className={styles['kbc-h1']}>{service.title}</h1>
              <p className={styles['kbc-hero-body']}>{service.heroCopy}</p>
              <div className={styles['kbc-subservice-rate-card']}>
                <div>
                  <span>{service.rate}</span>
                  <small>{service.rateNote}</small>
                </div>
                <p>{service.paymentNote}</p>
              </div>
              <div className={styles['kbc-hero-actions']}>
                <button
                  type="button"
                  className={styles['kbc-pill']}
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Request an Appointment
                </button>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Ask a General Question
                </a>
              </div>
            </div>
            <div className={styles['kbc-subservice-image-wrap']}>
              <Image
                src={IMAGE_BY_SLUG[service.slug]}
                alt={service.imageAlt}
                className={styles['kbc-subservice-image']}
                placeholder="blur"
                sizes="(max-width: 880px) 100vw, 44vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-intro-grid']}>
            <div>
              <SectionEyebrow>{service.title}</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                Therapy that meets the real shape of your life.
              </h2>
            </div>
            <p className={styles['kbc-body']}>{service.intro}</p>
          </div>

          <div className={styles['kbc-quiet-cta-card']}>
            <p>
              Not sure which service fits? Start with an appointment request and
              the office will follow up about service fit, availability, and
              next steps.
            </p>
            <button
              type="button"
              className={styles['kbc-pill']}
              onClick={() => setIsConsultationOpen(true)}
            >
              Request an Appointment
            </button>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-inner']}>
            <div className={styles['kbc-subservice-local-grid']}>
              <div>
                <SectionEyebrow>Local Therapy</SectionEyebrow>
                <h2 className={styles['kbc-page-h2']}>
                  {service.title} in Fort Thomas, Kentucky.
                </h2>
                <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
                  Kelly Baker Curry, MSW, MEd, LCSW provides {service.title.toLowerCase()}{' '}
                  through a Northern Kentucky therapy practice based in Fort
                  Thomas. Services may be available in person at the Fort Thomas
                  office and virtually for clients in Kentucky and Ohio,
                  depending on fit, availability, service type, and clinical
                  appropriateness.
                </p>
              </div>
              <div className={styles['kbc-subservice-local-cards']}>
                <div className={styles['kbc-subservice-local-card']}>
                  <h3>Fort Thomas office</h3>
                  <p>
                    In-person appointments are held at a calm private practice
                    setting in Fort Thomas, KY, serving clients from Northern
                    Kentucky and nearby communities.
                  </p>
                </div>
                <div className={styles['kbc-subservice-local-card']}>
                  <h3>Kentucky and Ohio</h3>
                  <p>
                    Kelly is licensed in Kentucky and Ohio. Virtual therapy may
                    be an option when location, service type, and scheduling
                    align.
                  </p>
                </div>
                <div className={styles['kbc-subservice-local-card']}>
                  <h3>Next step</h3>
                  <p>
                    The appointment request form helps the office understand
                    what you are looking for, how to coordinate scheduling, and
                    which service may fit.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['kbc-section-link-row']}>
              <a href="/about" className={styles['kbc-link-quiet']}>
                Meet Kelly Baker Curry
              </a>
              <a href="/approach" className={styles['kbc-link-quiet']}>
                Read about Kelly&rsquo;s therapy approach
              </a>
              <a href="/patient-resources" className={styles['kbc-link-quiet']}>
                Review patient resources
              </a>
              <a href="/contact" className={styles['kbc-link-quiet']}>
                Contact the Fort Thomas office
              </a>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Support</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>{service.supportTitle}</h2>
            <div className={styles['kbc-support-card-grid']}>
              {service.supportItems.map((item) => (
                <div className={styles['kbc-support-card']} key={item}>
                  <h3>{item}</h3>
                  <p>
                    A focused place to slow down, name what is happening, and
                    consider what kind of support would help.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-two-column']}>
            <div>
              <SectionEyebrow>In Session</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>{service.helpTitle}</h2>
              <p className={styles['kbc-body']}>
                Sessions are collaborative and grounded in what is actually
                happening. Kelly may help clarify patterns, practice
                communication, and identify next steps without rushing the work.
              </p>
            </div>
            <div className={styles['kbc-soft-check-grid']}>
              {service.helpItems.map((item) => (
                <div className={styles['kbc-soft-check-item']} key={item}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>How This Helps</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Support that stays practical and human.
            </h2>
            <div className={styles['kbc-subservice-seo-grid']}>
              <div>
                <h3>Clearer direction</h3>
                <p>
                  Therapy does not require having the right words before you
                  begin. Sessions can help sort through what feels urgent, what
                  has been building over time, and what kind of support may be
                  useful now.
                </p>
              </div>
              <div>
                <h3>Patterns and context</h3>
                <p>
                  Kelly pays attention to relationships, history, stress,
                  communication, and the conditions of daily life. The work is
                  not only about symptoms; it is also about understanding what
                  keeps patterns in motion.
                </p>
              </div>
              <div>
                <h3>Low-pressure next steps</h3>
                <p>
                  If you are looking for a therapist in Fort Thomas KY or
                  therapy in Kentucky and Ohio, the appointment request is a
                  simple way to ask about fit, availability, rates, and service
                  options without committing to ongoing care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {service.extraSection ? (
          <section className={styles['kbc-page-section-wrap-linen']}>
            <div className={styles['kbc-page-inner']}>
              <SectionEyebrow>Details</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                {service.extraSection.title}
              </h2>
              {service.extraSection.type === 'insurance' ? (
                <>
                  <p className={styles['kbc-body']}>
                    {service.extraSection.copy}
                  </p>
                  <div className={styles['kbc-subservice-pill-grid']}>
                    {service.extraSection.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles['kbc-subservice-comparison']}>
                  <div>
                    <h3>This service can help with</h3>
                    <ul>
                      {service.extraSection.canHelp.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>This service is not</h3>
                    <ul>
                      {service.extraSection.isNot.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : null}

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Approach</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Approaches Kelly may draw from
            </h2>
            <p className={styles['kbc-body']}>
              Depending on your goals and needs, sessions may include elements
              of the following. The approach is adapted to the person,
              relationship, or family in the room.
            </p>
            <div className={styles['kbc-subservice-pill-grid']}>
              {service.approachItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-interactive']}>
            <div>
              <SectionEyebrow>Reflection</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                {service.interactiveTitle}
              </h2>
              {service.interactiveNote ? (
                <p className={styles['kbc-body']}>{service.interactiveNote}</p>
              ) : null}
            </div>
            <div className={styles['kbc-subservice-selectors']}>
              {service.interactiveItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={
                    index === activeInteractive
                      ? styles['kbc-subservice-selector-active']
                      : ''
                  }
                  onClick={() => setActiveInteractive(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className={styles['kbc-subservice-selected-card']}>
              <h3>{service.interactiveItems[activeInteractive].title}</h3>
              <p>
                {service.interactiveItems[activeInteractive].body ??
                  'This may be a sign that a steady, private place to reflect and practice new responses could be useful.'}
              </p>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>What to Expect</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              What to expect when you begin {service.title.toLowerCase()}
            </h2>
            <div className={styles['kbc-begin-journey']}>
              {service.expectSteps.map((step, index) => (
                <div className={styles['kbc-begin-step']} key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step}</h3>
                  <p>
                    The early work is paced carefully so the next step is clear
                    enough to feel grounded and useful.
                  </p>
                </div>
              ))}
            </div>
            <div className={styles['kbc-section-link-row']}>
              <button
                type="button"
                className={styles['kbc-pill']}
                onClick={() => setIsConsultationOpen(true)}
              >
                Request an Appointment
              </button>
              <a href="/approach" className={styles['kbc-link-quiet']}>
                Learn about Kelly’s approach
              </a>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-rate-band']}>
            <div>
              <SectionEyebrow>Rate and Payment</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>Rate information</h2>
              <p className={styles['kbc-body']}>{service.paymentNote}</p>
            </div>
            <div className={styles['kbc-service-pricing-card']}>
              <div className={styles['kbc-service-pricing-amount']}>
                {service.rate}
              </div>
              <div className={styles['kbc-service-pricing-meta']}>
                <span>{service.rateNote}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>FAQs</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Questions about {service.title.toLowerCase()}
            </h2>
            <div className={styles['kbc-faq-list']}>
              {service.faq.map((item) => (
                <details className={styles['kbc-faq-item']} key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
            <div className={styles['kbc-section-link-row']}>
              <button
                type="button"
                className={styles['kbc-pill']}
                onClick={() => setIsConsultationOpen(true)}
              >
                Request an Appointment
              </button>
              <a href="/contact" className={styles['kbc-link-quiet']}>
                Ask a General Question
              </a>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-two-column']}>
            <div>
              <SectionEyebrow>Resources</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>Helpful resources</h2>
              <p className={styles['kbc-body']}>
                These outside resources are provided for general education and
                are not a substitute for therapy, diagnosis, legal advice, or
                emergency care.
              </p>
            </div>
            <div className={styles['kbc-subservice-resource-list']}>
              {service.resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Related Services</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Explore related therapy services
            </h2>
            <div className={styles['kbc-support-card-grid']}>
              {relatedServices.map((related) => (
                <a
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className={styles['kbc-support-card']}
                >
                  <h3>{related.title}</h3>
                  <p>{related.heroCopy}</p>
                  <span>Learn more</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-subservice-disclaimer']}>
            Information on this page is for general educational purposes only
            and is not a substitute for therapy, diagnosis, or emergency care.
            If this is an emergency or crisis, call 911 or go to the nearest
            emergency room.
          </div>
        </section>

        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Ready to take the next step?</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to take the next step?</h2>
          <p className={styles['kbc-body']}>
            Complete the secure appointment request form and the office will
            follow up about availability, service fit, and next steps.
          </p>
          <div className={styles['kbc-page-cta-actions']}>
            <button
              type="button"
              className={styles['kbc-pill']}
              onClick={() => setIsConsultationOpen(true)}
            >
              Request an Appointment
            </button>
            <a
              href="/contact"
              className={styles['kbc-link-quiet']}
              style={{ color: 'rgba(245,240,232,0.78)' }}
            >
              Ask a General Question
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={service.serviceKey}
      />
    </>
  );
}
