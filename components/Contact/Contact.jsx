import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import ContactForm from "../ContactForm";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <SectionsComponent id="contact" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="Contact Me" text="Shape your future with Me" />
      <div className="lg:flex justify-center gap-20">
        <div className="lg:w-[40%] mb-10">
          <h2 className="text-lg tracking-wide text-degrade text-justify mb-5">
            <span className="font-bold">
              Email, call, or complete the form{" "}
            </span>
            to learn how I can solve your problem and shape your future.
          </h2>
          <div>
            {/* Mail */}
            <div className="mb-3">
              <p className="flex items-center gap-3 text-md">
                <span className="text-orange-500">
                  <TfiEmail />
                </span>
                <a href="mailto:contact@jeanemmanuelcadet.com">
                  contact@jeanemmanuelcadet.com
                </a>
              </p>
            </div>

            {/* Phone 1 */}
            <div className="mb-3">
              <p className="flex items-center gap-3 text-md">
                <span className="text-orange-500">
                  <MdOutlineLocalPhone />
                </span>
                <a href="tel:+1 (267) 529 6040">+1 (267) 529 6040</a>
              </p>
            </div>

            {/* Phone 2 */}
            <div className="mb-3">
              <p className="flex items-center gap-3 text-md">
                <span className="text-orange-500">
                  <MdOutlineLocalPhone />
                </span>
                <a href="tel:+(509) 4780 1268">+(509) 4780 1268</a>
              </p>
            </div>
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
