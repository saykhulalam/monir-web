import React from "react";
import Container from "./Container";
import { Carousel } from "@material-tailwind/react";
import BannerOne from "../assets/bannerOne.jpg";
import BannerTow from "../assets/bannerTow.webp";
import BannerThree from "../assets/bannerThree.jpg";
import BannerFour from "../assets/bannerFour.jpg";
import Banner1 from "../assets/Banner-1.jpg";
import Banner2 from "../assets/Banner-2.jpg";
import Banner3 from "../assets/Banner-3.jpg";
import Banner5 from "../assets/Banner-5.jpg";
import Banner6 from "../assets/Banner-6.jpg";

const Banner = () => {
  return (
    <section className=" relative border-b">
      <Container>
        <Carousel
          autoplayDelay={2000}
          loop="true"
          autoplay="true"
          className="xl:mt-10 mt-5"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute hidden bottom-4 left-2/4 z-50  -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "xl:w-6 xl:h-6 w-2 h-2 bg-black"
                      : "xl:w-5 xl:h-5 w-2 h-2 bg-red-500"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={BannerFour}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={BannerOne}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={BannerTow}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={BannerThree}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={Banner1}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={Banner2}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={Banner3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={Banner5}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={Banner6}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;
