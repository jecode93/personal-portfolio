import CalendlyWidget from '@/components/utils/CalendlyWidget';
import Cta from '@/components/utils/Cta';
import React from 'react'

const Calendly = () => {
  return (
    <div>
      <CalendlyWidget /> {/* Calendly widget*/}
      <Cta /> {/* Call to action */}
    </div>
  );
}

export default Calendly;