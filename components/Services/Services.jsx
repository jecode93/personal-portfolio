import React from 'react'
import SectionsComponent from '../SectionsComponent';
import ServicesSectionCard from '../ServicesSectionCard';
import { services } from '@/js/data/services/services';

const ServicesSection = () => {
  return (
    <SectionsComponent id="services-page-section">
      {
        services.map((content, index) => (
          <ServicesSectionCard key={index} content={content} />
        ))
      }
    </SectionsComponent>
  );
}

export default ServicesSection;