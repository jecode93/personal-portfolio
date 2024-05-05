import Image from "next/image";
import React from "react";
import SocialComponent from "./SocialComponent";
import me from "@/public//images/me.jpg";

const MyCard = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={me}
        className="w-full md:w-[500px] lg:w-[400px] mb-4 rounded"
        alt="Jean Emmanuel Cadet"
        width={500}
        height={500}
      />
      <div className="text-center">
        <p className="text-lightestSlate text-xl lg:text-2xl font-bold tracking-wide">
          Jean Emmanuel CADET
        </p>
        <p className="md:text-lg text-slate my-3">
          Full-stack Software Engineer
        </p>
        <SocialComponent />
      </div>
    </div>
  );
};

export default MyCard;
