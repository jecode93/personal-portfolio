"use client";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import SectionsComponent from "../SectionsComponent";
import { portfolios } from "@/js/data/home/portfolio";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PopupComponent from "./PopupComponent";

const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(null);

  const showModal = (popupId) => {
    setOpen(true);
    const popupData = portfolios.find((item) => item.id === popupId);
    if (popupData) {
      setCurrentPopup(popupData);
    }
  };

  return (
    <SectionsComponent id="portfolio">
      <SectionTitle title="Portfolio" text="Featured Projects" />
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        speed={600}
      >
        {portfolios.map((portfolio) => (
          <SwiperSlide key={portfolio.id} className="duration-500">
            <div
              className="flex flex-col justify-between bg-darkblue rounded-t-lg hover:cursor-pointer duration-200 max-w-md h-[330px] lg:h-[290px]"
              onClick={() => showModal(portfolio.id)}
            >
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={500}
                height={500}
                className="mb-3 rounded-t-lg w-full"
              />
              <div className="p-3">
                <h1 className="text-xl">{portfolio.title}</h1>
                <p className="text-degrade mt-3">{portfolio.resume}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {currentPopup && (
          <PopupComponent
            isVisible={open}
            onClose={() => setOpen(false)}
            content={currentPopup}
          />
        )}
      </Swiper>
    </SectionsComponent>
  );
};

export default PortfolioSection;
