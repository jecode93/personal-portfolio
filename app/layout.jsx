import "./globals.css";
import "@/components/styles/selection.css";
import "@/components/styles/scroll.css";
import "@/components/styles/button.css";
import "react-toastify/dist/ReactToastify.css";
import "@/components/styles/description.css";
import { montserrat } from "@/js/fonts";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/utils/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: {
    default: "Full-stack Software Engineer | Jean Emmanuel Cadet",
    template: "%s | Jean Emmanuel Cadet",
  },
  description:
    "I specialize in designing, building, and deploying innovative software solutions for businesses as a Full-stack software engineer.",
  keywords: [
    "Haitian Developer",
    "Developpeur haitien",
    "Haiti",
    "Haitien",
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
  verification: {
    google: "ZMcCRjRGQaebpGuwh4qs7iBsM_ja9-uXpXAWT3hdEnQ",
    other: {
      "google-adsense-account": "ca-pub-1908529121556035",
    },
  },
  openGraph: {
    title: "Jean Emmanuel Cadet - Full-stack Software Engineer",
    description:
      "I specialize in designing, building, and deploying innovative software solutions for businesses as a Full-stack software engineer.",
    url: "https://www.jeanemmanuelcadet.com",
    // siteName: "Jean Emmanuel Cadet",
    images: [
      {
        url: "https:/jeanemmanuelcadet.com/social_image.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "I build things for the web.",
      },
      {
        url: "https:/jeanemmanuelcadet.com/social_image.webp", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "I build things for the web.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-blue text-lightestSlate`}>
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
