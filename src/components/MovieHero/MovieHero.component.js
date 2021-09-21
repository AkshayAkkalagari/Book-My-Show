import React from "react";
import { BiChevronRight } from "react-icons/bi";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" >
                <img 
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
                    alt="poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img 
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
                    alt="poster"
                />
            </div>

            <div className="relative hidden lg:block" style={{height:"30rem"}}>

                <div className="absolute h-full w-full z-10"
                    style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
                />

                <div className="absolute z-30 w-64 h-94 left-28 top-14 "> 
                    <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt="poster"
                        className="w-full h-full rounded-xl"
                    />
                </div>

                <img 
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
                    alt="poster"
                    className ="w-full h-full"
                />
            </div>

            <div>
                <h1 className="text-4xl">
                    Shang-Chi and the Legend of the Ten Rings
                </h1>
                <div className="flex">
                    <div className="flex ">
                        <img className="w-6 h-6 "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb21LB5XpbQSd5UhcPFMaaSSPSxX3QcXDG4A&usqp=CAU"
                        />
                        <p className="ml-1 mr-1 ">91%</p>
                    </div>
                    <div className="flex ml-2 text-lg ">
                        <p>40K ratings </p>
                        <p className="mt-1 text-lg"><BiChevronRight /></p>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default MovieHero;