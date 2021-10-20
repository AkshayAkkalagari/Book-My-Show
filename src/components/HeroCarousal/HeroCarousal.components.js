<<<<<<< HEAD
import React,{useState,useEffect} from "react";


import HeroSlider from "react-slick";
//import {GrNext,GrPrevious} from "react-icons/gr";
import {NextArrow, PrevArrow} from "./Arrows.component";
import axios from "axios";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

const [images, setImages] = useState([]);

useEffect(() =>{
  const requestNowPlayingMovies = async() =>{
    const getImages = await axios.get("/movie/now_playing");
  setImages(getImages.data.results);
};
requestNowPlayingMovies();
}, []);



  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow:<PrevArrow />

  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow:<PrevArrow />
  };



  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>
    </>
  );
};

export default HeroCarousal;
=======
import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLg = {
      arrows: true,
      autoplay: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "300px",
      infinite: true,
      NextArrow: <NextArrow />,
      PrevArrow: <PrevArrow />
    };
  
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      NextArrow: <NextArrow />,
      PrevArrow: <PrevArrow />
    };
  
  const images =[
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
  ]
  
    return (
      <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                images.map((image) => (
                    <div className="w-full h-64 md:h-80 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
                }
            </HeroSlider>
        </div>
  
        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                    </div>
                ))
                }
            </HeroSlider>
        </div>
      </>
    );
  };
  
  export default HeroCarousal;
  
>>>>>>> ae9c167acb2240a3e542cd773716728c748e691c
