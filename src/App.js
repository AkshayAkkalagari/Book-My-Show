import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Home.Page";
import Movie from "./Pages/Movie.Page";
import Plays from "./Pages/Plays.Pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}
// / , /movie
export default App;