import "./globals.css";
import "@/components/styles/selection.css";
import "@/components/styles/button.css";
import "react-toastify/dist/ReactToastify.css";
import "@/components/styles/description.css";
import { montserrat } from "@/js/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: {
    default: "Full-stack Software Engineer | Jean Emmanuel Cadet",
    template: "%s | Jean Emmanuel Cadet",
  },
  description:
    "I'm a Full-stack software engineer with over 3 years of experience building innovative and user-friendly web applications using React, Node.js, and Ruby on Rails. I'm passionate about helping small businesses grow online and have a proven track record of increasing user engagement by 20%.",
  keywords: [
    "Full-stack developer",
    "Software engineer",
    "Web developer",
    "Front-end developer",
    "Back-end developer",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Ruby on Rails",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "APIs",
    "APIs development",
    "REST APIs",
    "AWS",
    "Small business solutions",
    "Enterprise software development",
    "E-commerce development",
    "Custom software development",
    "Web application development",
    "Mobile app development",
    "SaaS development",
    "User experience (UX)",
    "User interface (UI) design",
    "Agile development",
    "Scalable solutions",
    "Healthcare",
    "Finance",
    "Education",
    "Web development",
    "Database design and management",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-blue text-white`}>
        <Navbar />
        <div>
          <ToastContainer />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
