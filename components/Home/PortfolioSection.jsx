"use client"
import React, { useState } from 'react'
import SectionTitle from '../SectionTitle';
import SectionsComponent from '../SectionsComponent';
import { portfolios } from '@/js/data/home/portfolio';
import Image from 'next/image';

const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  
  const popup = (data) => {
    
  }
  
  return (
    <SectionsComponent id="portfolio" otherClasses="">
      <SectionTitle title="Portfolio" text="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="bg-darkblue rounded">
            <Image
              src={portfolio.image}
              width={500}
              height={500}
              className="mb-3 rounded-t w-full"
            />
            <div className="p-3">
              <h1 className="text-2xl">{portfolio.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </SectionsComponent>
  );
}

export default PortfolioSection;