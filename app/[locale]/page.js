import { locales } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Hero from '@/components/Hero';

import { Suspense } from 'react';
import PageLayout from '@/components/PageLayout';
import Loader from '@/components/UI/Loader';
import FilteredMap from '@/components/MapTiler/FilteredMap';
import ModalCookies from '@/components/ModalCookies/ModalCookies';

export default async function IndexPage({ params: { locale } }) {
  const isValidLocale = locales.some(cur => cur === locale);

  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <PageLayout>
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <FilteredMap />
        </Suspense>
        <ModalCookies />
      </main>
    </PageLayout>
  );
}
