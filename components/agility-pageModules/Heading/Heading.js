import React from "react";

const Heading = ({ module }) => {
  const { fields } = module;
  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
        <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">
          {fields.title}
        </h1>
        {fields.subheading && (
          <h2 className="font-display text-gray-600 text-2xl font-black tracking-wide">
            {fields.subheading}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Heading;
