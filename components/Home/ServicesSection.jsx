import Image from "next/image";
import React from "react";
import { services } from "@/js/data/home/services";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import bullet from "@/public/images/bullet.svg";
import SectionsComponent from "../SectionsComponent";

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
            className="bg-darkblue p-5 md:p-10 flex flex-col justify-between rounded"
          >
            <Link href="/services">
              <Image
                src={service.icon}
                width={70}
                height={70}
                alt={service.title}
                className="mb-10 w-12 md:w-16"
              />
              <h2 className="font-bold text-xl md:text-2xl mb-5">
                {service.title}
              </h2>
              <p className="text-degrade text-lg mb-10 md:text-xl">
                {service.description}
              </p>
              {/* <p className="text-xl font-bold text-orange-500">
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
