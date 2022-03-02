import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {StyledImg} from './Styled'

const ImageCarousel = ({ module }) => {
  const { fields } = module;
  const {isAutoScrollEnabled, slideDelay, ...restFields} = fields
  const images = Object.values(restFields);
  const autoPlay = isAutoScrollEnabled === 'true'
  // default slide delay to 1 seconds 
  const delayInSeconds = (slideDelay > 1 && slideDelay < 10) ? slideDelay * 1000 : 1000
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
        <Carousel responsive={responsive} autoPlay={autoPlay} autoPlaySpeed={delayInSeconds} infinite={true}>
          {images.map((img,i) => (
            <StyledImg
              src={img.url}
              alt={img.label}
              className="rounded-lg object-cover object-center p-3"
              key={`${img.label}+${i}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;


