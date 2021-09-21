import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster.component";

//config
import settings from "../../config/PosterCarousal.config";

//Images
import PremiereImage from "../../config/TempPoster.config";

export const Premiere = () => {
   
  return (
    <>
      <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
      </div>
      <Slider {...settings}>
        {PremiereImage.map((image)=> (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premiere;