<<<<<<< HEAD
import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/EntertaimentCarousal/EntertainmentCard.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


const HomePage = () => {

const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

console.log({popularMovies});

  return (
  <>
  <div className="flex flex-col gap-10">

  <div className="container mx-auto px-4">
  <h1 className="text-2xl font-bold text-gray-800">
  The best of Entertainment
  </h1>
  <EntertainmentCardSlider />
  </div>

  <div className="bg-navCol-200 py-16">

  <div className="container mx-auto px-4">
  <div className="flex">
   <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
   alt="Rupay"
   className="w-full h-full"
    />
  </div>
   <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
  </div>
  </div>
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
  images={popularMovies}
  title="Online Streaming Events"
  isDark={false}
  />
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
  images={popularMovies}
  title="Outdoor Events"
  isDark={false}
  />
  </div>
  </>
);
};

=======
import React from "react";
import EntertainmentCardSlider from "../components/EntertaimentCarousal/EntertainmentCard.component";
import Premiere from "../components/Premiere/Premiere.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPoster from "../config/TempPoster.config";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                    The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-navCol-200 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="Rupay"
                        className="w-full h-full" />
                        </div>
                        <PosterSlider images={TempPoster} title="Premieres" subtitle="Brand new releases every Friday" isDark/>
                    </div>
                </div>

                <div className="container mx-auto py-4">
                    <PosterSlider images={TempPoster} title="Online Streaming Events" isDark={false} />
                </div>

                <div className="container mx-auto py-4">
                    <PosterSlider images={TempPoster} title="Outdoor Events" isDark={false} />
                </div>
            </div>
        </>
    );
};

>>>>>>> ae9c167acb2240a3e542cd773716728c748e691c
export default HomePage;