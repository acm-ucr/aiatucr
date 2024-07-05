import React from "react";
import Image from "next/image";

const ProjectCardRight = ({ projectName, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* Image container */}
      <div className="relative w-full md:w-auto">
        <Image
          src="/images/projectCard.webp"
          alt=""
          width={833}
          height={436.31}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-blue-400 text-center"
            style={{ fontSize: "clamp(1rem, 5vw, 2rem)" }}
          >
            {projectName}
          </p>
        </div>
      </div>
      {/* Text to the right */}
      <div className="mt-4 md:mt-0 md:ml-4 w-full max-w-xs">
        <p className="text-xl md:text-2xl text-black pt-12">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardRight;
