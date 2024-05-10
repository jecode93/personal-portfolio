import React from 'react'
import { socials } from "@/js/data/menu";

const SocialComponent = () => {
  return (
    <>
      {/* Social section */}
      <ul className="flex gap-4 justify-center items-center left-0 right-0">
        {socials.map((social, index) => (
          <li
            key={index}
            className="text-xl transition duration-500 hover:-translate-y-2"
          >
            <a
              href={social.link}
              target="_blank"
              aria-label={social.aria}
              className="text-orange-500 hover:text-lightestSlate"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
      {/* End Social section */}
    </>
  );
}

export default SocialComponent;