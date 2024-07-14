'use client'
import React from "react";
import { InlineWidget } from "react-calendly";
import SectionsComponent from "./SectionsComponent";
import SectionTitle from "./SectionTitle";

const CalendlyWidget = () => {
  return (
    <SectionsComponent id="services" otherClasses="pt-32 md:pt-48 -mb-20">
      <SectionTitle
        title="Schedule a meeting"
        text="Let's shape the future of your business"
      />
      <InlineWidget
        url="https://calendly.com/jeanemmanuelcadet/30min"
        className="mb-10"
        styles={{ marginBottom: "40px", height: "1000px", borderRadius: "5px" }}
        pageSettings={{
          backgroundColor: "ccd6f6",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "0a192f",
        }}
      />
    </SectionsComponent>
  );
};

export default CalendlyWidget;
