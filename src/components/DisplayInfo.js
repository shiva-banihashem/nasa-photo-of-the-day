
import React from "react";

function DisplayInfo(props){
  if (!props.title && props.error ) return <p>Server Error: {props.error}</p>;
  else 
    if(!props.title && !props.error ) return <h3>Loading...</h3>
  return (
    <div >
      
      <div className = "display-info">
       <div>
       <h2>{props.title} </h2>
       <p>{props.explanation}</p>
       </div>
       <img id= 'picture' src={props.url} alt="nasa picture"/>
      </div>          
    </div>
  )

}

export default DisplayInfo;