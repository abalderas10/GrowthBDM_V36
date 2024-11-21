'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <section className="bg-gradient-to-r from-growth-blue to-growth-dark-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <Button size="lg" className="bg-white text-growth-blue hover:bg-growth-light-blue">
          {t('cta')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;