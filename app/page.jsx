import Link from "next/link";
import { hero, infosHero, aboutme } from "./js/data/home";
import me from "./images/me.png";
import noise from "./images/noise.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="hero md:px-5 lg:px-32 flex justify-between h-screen flex-col bg-hero bg-cover bg-left md:bg-center bg-no-repeat"
      >
        <div className="flex flex-col px-5 tracking-widest leading-7 justify-center lg:w-[70%] h-full">
          {hero.map((text, index) => (
            <div key={index}>
              <p className="text-white mb-3 text-sm md:text-xl">
                {text.subTitle}
              </p>
              <h1 className="text-2xl mb-5 md:text-4xl font-black md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-500">
                <span>{text.title}</span> <br />
                <span>{text.title2}</span>
              </h1>

              <div className="border w-20 md:w-40 mb-7 text-gray" />
              <p className="mb-3 text-sm md:text-xl">{text.desc1}</p>
              <p className="mb-7 text-sm md:text-xl">{text.desc2}</p>
            </div>
          ))}
          <Link
            href="/contact"
            className="md:hidden uppercase w-fit hover:scale-105 text-sm font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300"
          >
            Contact me
          </Link>
        </div>
        <div className="hidden mb-10 md:flex gap-5 md:divide-x">
          {infosHero.map((info, index) => (
            <div className="mb-5 md:mb-0 px-5 text-sm" key={index}>
              <h3 className="font-bold mb-1">{info.text}</h3>
              {info.text === "Email" && (
                <a href={`mailto:${info.content}`} className="text-gray">
                  {info.content}
                </a>
              )}
              {info.text === "Phone" && (
                <a href={`tel:${info.content}`} className="text-gray">
                  {info.content}
                </a>
              )}
              {info.text === "Work location" && (
                <p className="text-gray">{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="about px-5 lg:px-32 py-32 bg-noise">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:px-5">
          <div className="flex justify-center items-center lg:w-1/2">
            <Image
              src={me}
              className="w-full md:w-[500px]"
              alt="Jean Emmanuel Cadet"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-start lg:w-1/2">
            {aboutme.map((about, index) => (
              <div key={index}>
                <h3 className="text-xl md:text-2xl mb-3 text-orange-500">
                  Who am I?
                </h3>
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold tracking-widest">
                  {about.title}
                </h2>
                <p className="text-sm md:text-xl tracking-widest">
                  {about.paragraph}
                </p>
                <br />
                <p className="text-sm md:text-xl tracking-widest">
                  {about.paragraph2}
                </p>
                <br />
                <p className="text-sm md:text-xl tracking-widest">
                  {about.paragraph3}
                </p>
              </div>
            ))}
            <Link
              href="/about"
              className="w-fit mt-10 hover:scale-105 text-sm md:text-xl font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300"
            >
              Read more...
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
