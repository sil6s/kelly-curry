import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/src/data/seo';
import { serviceDetails } from '@/src/data/serviceDetails';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/about',
    '/approach',
    '/services',
    '/patient-resources',
    '/contact',
    '/fees-insurance',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...serviceDetails.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
