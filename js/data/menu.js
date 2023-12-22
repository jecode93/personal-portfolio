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
    name: "Portfolio",
    path: "/portfolio",
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
  },
  {
    link: "https://www.linkedin.com/in/jean-emmanuel-cadet/",
    icon: <BsLinkedin />,
  },
  {
    link: "https://www.facebook.com/jeanemmanuelcadet07",
    icon: <BsFacebook />,
  },
  {
    link: "https://twitter.com/jecode93",
    icon: <FaSquareXTwitter />,
  },
];
