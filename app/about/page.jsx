import Approach from '@/components/About/Approaches';
import Experiences from '@/components/About/Experiences';
import Hero from '@/components/About/Hero';
import Skills from '@/components/About/skills';
import Cta from '@/components/Home/Cta';
import React from 'react';

export const metadata = {
  title: "About me",
  description: "Driven by innovation, I craft user-friendly and high-performance web applications for businesses of all sizes. With over 3 years of experience in React, Node.js, and Ruby on Rails, I've helped startups, small businesses, and corporations achieve their digital goals. Contact me today for a free consultation to discuss your project!"
}

const About = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Experiences />
      <Approach />
      <Cta />
    </main>
  )
}

export default About;