import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.HOC";

//Pages
import HomePage from "./Pages/Home.Page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
