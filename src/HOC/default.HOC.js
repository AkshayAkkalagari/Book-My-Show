// transforms component into another component
// adding additonal functionalities to the existing components

import React from "react";
import { Route } from "react-router";

//layouts
import DefaultLayout from "../layouts/default.layout";


const DefaultHOC = ({ component: Component , ...rest }) => {
    // component
    //props -> path exact
    return (
        <>
            <Route 
            {...rest} 

            component = {(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}
            />    
        </>
    )
};
 
export default DefaultHOC;