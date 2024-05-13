import Image from "next/image";
import React from "react";
import { services } from "@/js/data/home/services";
import Link from "next/link";
import SectionTitle from "../utils/SectionTitle";
import bullet from "@/public/images/bullet.svg";
import SectionsComponent from "../utils/SectionsComponent";

const ServicesSection = () => {
  return (
    <SectionsComponent id="services">
      <div className="z-0">
        <Image
          src={bullet}
          alt="Bullet"
          width={100}
          height={100}
          className="absolute right-0 -top-20 w-[100]"
        />
      </div>
      <SectionTitle title="Services" text="What I Do" />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 place-content-center gap-5 z-40">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-darkblue p-5 md:p-10 flex flex-col justify-between rounded transition duration-500 border border-transparent hover:border-orange-500 hover:-translate-y-1"
          >
            <Link href={service.href} className="h-full">
              <Image
                src={service.icon}
                width={70}
                height={70}
                alt={service.title}
                className="mb-7 w-10"
              />
              <h2 className="font-medium text-lightestSlate text-lg lg:text-xl 2xl:text-2xl mb-5">
                {service.title}
              </h2>
              <p className="text-slate mb-10">{service.description}</p>
              {/* <p className="text-xl font-medium text-orange-500 tracking-wide">
                ${service.price}/h
              </p> */}
            </Link>
          </div>
        ))}
      </div>
    </SectionsComponent>
  );
};

export default ServicesSection;
