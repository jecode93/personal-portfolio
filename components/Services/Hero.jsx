import React from 'react'
import SectionsComponent from '../SectionsComponent';
import SectionTitle from '../SectionTitle';

const Hero = () => {
  return (
    <SectionsComponent id="services" otherClasses="pt-60 -mb-20">
      <SectionTitle title="Services" text="What I Build" />
      <div>
        <p className="tracking-wide text-lg text-degrade text-justify">
          I offer a comprehensive range of services designed to bring your
          digital ideas to life and enhance your online presence.
          <br />
          <br />
          With a strong background in both front-end and back-end development, I
          am dedicated to delivering robust, scalable, and user-centric
          solutions tailored to meet your unique business needs.
        </p>
      </div>
    </SectionsComponent>
  );
}

export default Hero;