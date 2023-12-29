import Image from 'next/image';
import React from 'react';
import { services } from '@/js/data/services'
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section id="services" className="px-5 md:px-10 lg:px-32 py-20 relative">
      <div className='z-0'>
        <Image
          src="/images/bullet.png"
          alt="Bullet"
          width={100}
          height={100}
          className="absolute right-0 -top-20"
        />
      </div>
      <h2 className="uppercase tracking-widest md:text-xl text-orange-500 mb-10">
        Services
      </h2>
      <div className="mb-20">
        <h1 className="font-bold text-3xl md:text-5xl mb-5">What I Do</h1>
        <div className="w-20 md:w-40 border" />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 place-content-center gap-5 z-40">
        {services.map((service, index) => (
          <div key={index} className="bg-darkblue p-5 md:p-10 flex flex-col justify-between">
            <Link href="/services">
              <Image src={service.icon} width={70} height={70} alt={service.title} className='mb-10 w-12 md:w-16'/>
              <h2 className="font-bold text-xl md:text-2xl mb-5">{service.title}</h2>
              <p className='opacity-60 mb-10'>{service.description}</p>
              <p className='text-xl font-bold text-orange-500'>${service.price}/h</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;