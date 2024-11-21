'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const GrowthDeveloper = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alberto-balderas'
      });
    }
  };

  return (
    <section className="py-16 bg-growth-light-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Un Growth Business Developer"
                fill
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-growth-text">Un Growth Business Developer</h2>
            <p className="text-growth-text mb-6">
              Un Growth Business Developer es un profesional especializado en identificar y crear oportunidades de crecimiento para las empresas. Su rol abarca desde la planificación estratégica hasta la implementación de iniciativas que impulsan el desarrollo del negocio.
            </p>
            <Button onClick={openCalendly} className="bg-growth-blue text-white hover:bg-growth-dark-blue">
              Agenda una Reunión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthDeveloper;