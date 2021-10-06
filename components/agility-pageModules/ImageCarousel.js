import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AgilityImage } from "@agility/nextjs";

const ImageCarousel = ({ module }) => {
  const { fields } = module;
  const images = Object.values(fields);
  console.log("carousel", images);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
        <Carousel responsive={responsive}>
          {images.map((img,i) => (
            <AgilityImage
              src={img.url}
              alt={img.label}
              width="600"
              height="450"
              className="rounded-lg object-cover object-center"
              key={`${img.label}+${i}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
