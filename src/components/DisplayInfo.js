
import React from "react";
import styled from 'styled-components';

const DisplayCard = styled.div`
width: 98%;
height: 100%;
display:flex;
margin: 2% 2%
color:darkblue;
`;
const DisplayCard2 = styled.div`
width: 98%;
height: 100%;
margin: 2% 2%
`;

const ErrorMsg = styled.p`
color: red`;

const Image = styled.img`
border-radius:2%;
`;

function DisplayInfo(props){
  if (!props.title && props.error ) return <ErrorMsg>Server Error: {props.error}</ErrorMsg>;
  else 
    if(!props.title && !props.error ) return <h3>Loading...</h3>
    return (
      <DisplayCard>
        <DisplayCard2>
          <h2>{props.title} </h2>
          <p>{props.explanation}</p>
        </DisplayCard2>
       
        <Image src={props.url} alt="nasa picture"></Image>
      </DisplayCard>
  )
  // return (
  //   <div >
      
  //     <div className = "display-info">
  //      <div>
  //      <h2>{props.title} </h2>
  //      <p>{props.explanation}</p>
  //      </div>
  //      <img id= 'picture' src={props.url} alt="nasa picture"/>
  //     </div>          
  //   </div>
  // )

}

export default DisplayInfo;