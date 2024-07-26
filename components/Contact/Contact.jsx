import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import ContactForm from "./ContactForm";
import InfoCard from "../utils/InfoCard";
import { infos } from "@/js/data/contact/info";

const ContactSection = () => {
  return (
    <SectionsComponent
      id="contact"
      otherClasses="pt-32 md:pt-48 border-b border-degrade"
    >
      <SectionTitle title="Get in Touch" text="Shape your future with Me" />
      <div className="flex flex-col justify-center items-center">
        <div className="lg:flex justify-between gap-5">
          <div className="mb-10 lg:w-1/2">
            <h2 className="text-2xl text-lightestSlate uppercase font-bold mb-5">
              Let&apos;s Talk For your{" "}
              <span className="text-orange-500">Next Project(s)</span>
            </h2>
            <h2 className="tracking-wide text-justify mb-5">
              <span className="font-bold">
                Email, call, or complete the form{" "}
              </span>
              to learn how I can solve your problem and shape your future.
            </h2>
            <div>
              {infos.map((info) => (
                <InfoCard key={info.id} content={info} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionsComponent>
  );
};

export default ContactSection;
