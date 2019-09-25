import React,{useState,useEffect} from "react";
import axios from 'axios';
import "./App.css";
import DisplayInfo from './components/DisplayInfo.js'
import logo from  './img/nasa-logo.png';
function App() {
  let todaydate = new Date();
  var year = todaydate.getFullYear();

  var month = (1 + todaydate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = todaydate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  let today =  year + '-' + month + '-' + day 
  
  // reformatting date for display
  let ArrayDate= today.split('-');
  let formatedDate = ArrayDate[1]+ '-'+ArrayDate[2]+'-'+ArrayDate[0];
  const [infoState, setInfo] = useState({})
  const [date, setDate] = useState(today);
  const [errorState, setError]= useState('');

  const [date2,setDate2]=useState(formatedDate)
  console.log(infoState);
  
  

  useEffect(() => {
    // Make a request for a user with a given ID
    console.log('in effect:'+date);
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=y9SoVMh5FCAQaX2oBYC4PrP69Kq6R2f90OhlpC5x&date=${date}`)
      .then( result =>{
        // handle success
        console.log(result);
        setInfo(result.data);
        
        setError("");
      }
      )
      .catch(function (error) {
        

        // handle error
        
        console.log("Errormsg:"+error);
        setError(error.message);
      })
  },[date])


  return (
    <div className="App">
    <header className="App-header">
      <div className="heading">
        <img className='App-logo' src={logo} alt= "NASA logo"></img>
        <h1>NASA's Picture of the Day for {date2}</h1>
      </div>
      <h2>Select a date to change the picture of the day:</h2>
      <form>
      <label for="date">Date</label>
       <input onChange={(event) => {
         setDate(event.target.value);
         ArrayDate= event.target.value.split('-');
         formatedDate = ArrayDate[1]+ '-'+ArrayDate[2]+'-'+ArrayDate[0];
         setDate2(formatedDate);
      }
       } id='date' type={"date"} max={today} ></input>
       
     </form>
    </header>
      <DisplayInfo 
          title={infoState.title}
          url={infoState.url}
          explanation={infoState.explanation}
          date={infoState.date}
          error={errorState}
        /> 
     
     
    </div>
  );
}

export default App;
