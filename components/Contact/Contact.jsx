import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import ContactForm from "../ContactForm";
import { infos } from "@/js/data/contact/info";
import InfoCard from "../InfoCard";

const ContactSection = () => {
  return (
    <SectionsComponent id="contact" otherClasses="pt-32 md:pt-48 border-b border-degrade">
      <SectionTitle title="Contact Me" text="Shape your future with Me" />
      <div className="lg:flex justify-center gap-20">
        <ContactForm />
      </div>
    </SectionsComponent>
  );
};

export default ContactSection;
