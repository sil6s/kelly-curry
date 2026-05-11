export const SITE_URL = 'https://kbc-therapy.com';

export const homeFaq = [
  {
    question: 'What types of therapy does Kelly Baker Curry offer?',
    answer:
      'Kelly offers individual therapy, couples therapy, family therapy, and coparenting therapy for clients navigating anxiety, grief, trauma, relationship stress, life transitions, and communication challenges.',
  },
  {
    question: 'Does Kelly work with clients in Kentucky and Ohio?',
    answer:
      'Yes. Kelly is licensed in Kentucky and Ohio and offers therapy options based on location, fit, availability, and service type.',
  },
  {
    question: 'How do I know which therapy service is right for me?',
    answer:
      'You do not need to know exactly where to begin. The appointment request form helps the office understand whether individual, couples, family, or coparenting therapy may be the best fit.',
  },
];

export const servicesFaq = [
  {
    question: 'Does Kelly offer individual therapy?',
    answer:
      'Yes. Individual therapy is available for adults seeking support with anxiety, grief, trauma, stress, life transitions, relationship patterns, and personal growth.',
  },
  {
    question: 'Does Kelly offer couples therapy?',
    answer:
      'Yes. Couples therapy supports partners working on communication, recurring conflict, trust, disconnection, repair, and relationship stress.',
  },
  {
    question: 'Does Kelly offer family therapy?',
    answer:
      'Yes. Family therapy supports families navigating communication challenges, conflict, parenting stress, transitions, boundaries, and reconnection.',
  },
  {
    question: 'What concerns can therapy help with?',
    answer:
      'Therapy may support anxiety, grief, trauma, depression, relationship stress, family conflict, communication concerns, life transitions, and emotional overwhelm.',
  },
];

export const contactFaq = [
  {
    question: 'How do I schedule a consultation?',
    answer:
      'Use the appointment request form to share the service you are seeking, scheduling preferences, and payment information. The office will follow up about availability, fit, and next steps.',
  },
  {
    question: 'Where is Kelly’s office located?',
    answer:
      'Kelly’s office is located at Watch Point in Fort Thomas, Kentucky, with in-person therapy options available by appointment.',
  },
  {
    question: 'Are virtual sessions available?',
    answer:
      'Virtual therapy options may be available for clients in Kentucky and Ohio based on service type, fit, and availability.',
  },
];

export function faqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Kelly Baker Curry, LCSW',
      url: SITE_URL,
      description:
        'Therapy in Fort Thomas, Kentucky, for individuals, couples, families, and co-parents, with services for clients in Kentucky and Ohio.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'Kelly Baker Curry, LCSW',
      url: SITE_URL,
      image: `${SITE_URL}/icon.svg`,
      logo: `${SITE_URL}/icon.svg`,
      telephone: '(859) 555-0102',
      email: 'contact@kbc-therapy.com',
      priceRange: '$150-$225',
      description:
        'Kelly Baker Curry, MSW, MEd, LCSW provides individual therapy, couples therapy, family therapy, and coparenting therapy in Fort Thomas, Kentucky, serving clients in Kentucky and Ohio.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '337 Tower Hill Road',
        addressLocality: 'Fort Thomas',
        addressRegion: 'KY',
        postalCode: '41075',
        addressCountry: 'US',
      },
      areaServed: [
        'Fort Thomas, KY',
        'Northern Kentucky',
        'Kentucky',
        'Ohio',
      ],
      founder: {
        '@id': `${SITE_URL}/#kelly`,
      },
      knowsAbout: [
        'Individual therapy',
        'Couples therapy',
        'Family therapy',
        'Anxiety therapy',
        'Grief counseling',
        'Trauma therapy',
        'Relationship stress',
        'CBT',
        'ACT',
        'EFT',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Therapy services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Individual Therapy',
              url: `${SITE_URL}/services/individual-therapy`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Couples Therapy',
              url: `${SITE_URL}/services/couples-therapy`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Family Therapy',
              url: `${SITE_URL}/services/family-therapy`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Coparenting Therapy',
              url: `${SITE_URL}/services/coparenting-therapy`,
            },
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#kelly`,
      name: 'Kelly Baker Curry',
      honorificSuffix: 'MSW, MEd, LCSW',
      jobTitle: 'Licensed Clinical Social Worker',
      worksFor: {
        '@id': `${SITE_URL}/#business`,
      },
      alumniOf: 'Northern Kentucky University',
      areaServed: [
        'Fort Thomas, KY',
        'Northern Kentucky',
        'Kentucky',
        'Ohio',
      ],
      knowsAbout: [
        'Individual therapy',
        'Couples therapy',
        'Family therapy',
        'Anxiety',
        'Grief',
        'Trauma',
        'Relationship stress',
        'CBT',
        'ACT',
        'EFT',
      ],
    },
  ],
};
