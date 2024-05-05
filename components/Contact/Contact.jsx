import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <SectionsComponent
      id="contact"
      otherClasses="pt-32 md:pt-48 border-b border-degrade"
    >
      <SectionTitle title="Contact Me" text="Shape your future with Me" />
      <div className="lg:flex justify-center gap-20">
        <ContactForm />
      </div>
    </SectionsComponent>
  );
};

export default ContactSection;
