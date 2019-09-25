
import React from "react";

function DisplayInfo(props){
  if (!props.title && props.error ) return <p>Server Error: {props.error}</p>;
  else 
    if(!props.title && !props.error ) return <h3>Loading...</h3>
  return (
    <div>
      
      <h2>{props.title} </h2>
      <p>{props.explanation}</p>
      <img src={props.url} alt="nasa picture"/>
                
    </div>
  )

}

export default DisplayInfo;