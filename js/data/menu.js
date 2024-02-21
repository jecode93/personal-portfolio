import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

export const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const socials = [
  {
    link: "https://github.com/jecode93",
    icon: <BsGithub />,
    aria: "Go to my GitHub profile",
  },
  {
    link: "https://www.linkedin.com/in/jean-emmanuel-cadet/",
    icon: <BsLinkedin />,
    aria: "Go to my LinkedIn",
  },
  {
    link: "https://www.facebook.com/jeanemmanuelcadet07",
    icon: <BsFacebook />,
    aria: "Go to my Facebook page",
  },
  {
    link: "https://twitter.com/jecode93",
    icon: <FaSquareXTwitter />,
    aria: "Go to my X page, formely twitter",
  },
];
