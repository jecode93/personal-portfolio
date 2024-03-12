import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import ContactForm from "../ContactForm";
import { infos } from "@/js/data/contact/info";
import InfoCard from "../InfoCard";

const ContactSection = () => {
  return (
    <SectionsComponent id="contact" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="Contact Me" text="Shape your future with Me" />
      <div className="lg:flex justify-center gap-20">
        <div className="lg:w-[40%] mb-10">
          <h2 className="tracking-wide text-degrade text-justify mb-5">
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
        <div className="lg:w-[60%] mb-10">
          <ContactForm />
        </div>
      </div>
    </SectionsComponent>
  );
};

export default ContactSection;
