// transforms component into another component
// adding additonal functionalities to the existing components

import React from "react";
import { Route } from "react-router";

//layouts
import MovieLayout from "../layouts/Movie.layout";


const MovieHOC = ({ component: Component , ...rest }) => {
    // component
    //props -> path exact
    return (
        <>
            <Route 
            {...rest} 

            component = {(props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )}
            />    
        </>
    )
};
 
export default MovieHOC;