import React, {useState, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Apod from "./components/Apod";
import axios from "axios";

function App() {
  
  // Establish a starting point from today's date.
  let today = new Date();
  today = `${today.getFullYear().toString()}-${(today.getMonth()+ 1).toString().padStart(2,0)}-${today.getDate().toString().padStart(2,0)}`;

  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);

  const API_KEY = "aW1jfVXXw65uyhdPe2exJVbGtv8uNAUmdHxJGhA7"; 

  // Fetch the NASA Astronomy Picture of the Day from NASA API for selected date.
  useEffect( () =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(response => {
        setApod(response.data);
      })
        .catch(error => console.log(`Error: ${error}`));
  }, [date]);

  // Update the date on change of the selected date in the calendar.
  const updateDate = value =>{
    setDate(`${value.getFullYear().toString()}-${(value.getMonth()+ 1).toString().padStart(2,0)}-${value.getDate().toString().padStart(2,0)}`);
  };

  // Render the Astronomy Picture of the Day to view.
  return (
    <div className="App">
      <Apod title={apod.title} description={apod.explanation} url={apod.url} copyright={apod.copyright} fnc={updateDate}/>
    </div>
  );
}

export default App;
