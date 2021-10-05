import React from "react";
import { AgilityImage } from "@agility/nextjs";

const ImageComponent = ({ module }) => {
  // get module fields
  const { fields } = module;
  console.log(module, 'image mod')
  return (
    <div className="relative px-8">
      <div className="md:w-6/12 flex-shrink-0 relative">
        <AgilityImage
          src={fields.image.url}
          alt={fields.image.label}
          width="768"
          height="512"
          className="rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
