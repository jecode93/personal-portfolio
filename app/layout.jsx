import './globals.css';
import { nunito } from "@/js/fonts";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "@/components/styles/description.css";


export const metadata = {
  title: "Full-Stack Software Engineer | Jean Emmanuel Cadet",
  description:
    "I am a Full-Stack Software Engineer with more than 3 years of experience in web development. I am proficient in all aspects of the development process, from Front-end to Back-end mastery, I thrive in turning complex ideas into elegant, user-centric applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-blue text-white`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
