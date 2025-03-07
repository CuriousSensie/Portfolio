import React from 'react';
import TechnologiesMarquee from './TechnologiesMarquee';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 py-20 w-full lg:flex lg:flex-row-reverse">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-4 text-center pb-8 lg:pb-0 lg:pt-4">
        Technologies I Work With
      </h1>

      {/* Technologies Marquee */}
      <div className="w-3/4 lg:w-1/2 flex items-center justify-center mx-auto">
      <TechnologiesMarquee />

      </div>
    </div>
  );
};

export default Technologies;
