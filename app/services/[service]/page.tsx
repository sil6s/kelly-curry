import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/src/components/ServiceDetailPage';
import { getServiceDetail, serviceDetails } from '@/src/data/serviceDetails';

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ service: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = getServiceDetail(params.service);
  if (!service) notFound();

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.ogDescription,
      type: 'website',
      url: `/services/${service.slug}`,
    },
  };
}

export default function Page({ params }: { params: { service: string } }) {
  return <ServiceDetailPage slug={params.service} />;
}
