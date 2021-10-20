<<<<<<< HEAD
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
 
=======
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
 
>>>>>>> ae9c167acb2240a3e542cd773716728c748e691c
export default MovieHOC;