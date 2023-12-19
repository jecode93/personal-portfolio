import Link from "next/link";
import { hero, infosHero } from "./js/data/home";

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
              <Link
                href="/contact"
                className="md:hidden uppercase hover:scale-105 text-sm font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300 rounded"
              >
                Contact me
              </Link>
            </div>
          ))}
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
      <section id="about" className="about px-5 lg:px-32 py-20 border">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:px-5">
          <div className="flex justify-center lg:justify-start w-full h-56 border lg:w-1/2">
            <p>Photo</p>
          </div>
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic esse commodi fuga nulla iure ipsa quasi, a illum. Voluptas omnis qui perferendis tempore quidem quibusdam ut maxime animi at.
            Ipsa unde molestiae voluptas rem esse accusantium aspernatur totam nam perferendis sed, dolore minima nulla deleniti reiciendis beatae officiis officia distinctio impedit tempora deserunt omnis laudantium mollitia! Eius, ad suscipit?
            Dignissimos sunt ipsa odio porro similique facere, voluptates nihil reiciendis voluptatum excepturi nemo modi libero necessitatibus dolore animi vel temporibus qui earum aut minus unde iusto? Modi, dolorem deserunt! Aut!
            Optio deserunt fugiat distinctio quas accusantium, saepe commodi exercitationem iure in voluptate nostrum excepturi veniam, illo earum fuga dolor debitis. Suscipit esse soluta nobis, quae ea autem officia. Dignissimos, quibusdam.
            Excepturi, quis et saepe libero accusamus perferendis minus officia maiores quod tenetur dolor mollitia, dolorum a doloremque ad cum accusantium est sint molestias porro perspiciatis maxime eligendi dolorem aperiam. Asperiores.</p>
          </div>
        </div>
      </section>
    </>
  );
}
