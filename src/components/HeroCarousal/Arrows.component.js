<<<<<<< HEAD
import React from "react";


export const NextArrow = (props) =>{
  //const {className, style, onClick}=props;
  return(
    <>

    <div
    className={props.className}
    style={{ ...props.style}}
    onClick={props.onClick} />

    </>
  )
};

export const PrevArrow = (props) =>{
  return(
    <>
    <div
    className={props.className}
    style={{...props.style}}
    onClick={props.onClick} />
    </>
  )
=======
import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
        <div
            className={props.className}
            style={{ ...props.style, backgroundColor: "black"}}
            onClick={props.onClick}
        />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
        <div
            className={props.className}
            style={{ ...props.style, backgroundColor: "black"}}
            onClick={props.onClick}
        />
    </>
  );
>>>>>>> ae9c167acb2240a3e542cd773716728c748e691c
};