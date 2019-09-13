import React, {useState, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Apod from "./components/Apod";
import axios from "axios";

function App() {

  const [apod, setApod] = useState({});
  const [date, setDate] = useState("2019-09-12");

  const API_KEY = "aW1jfVXXw65uyhdPe2exJVbGtv8uNAUmdHxJGhA7"; 

  useEffect( () =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(response => {
        setApod(response.data);
      })
        .catch(error => console.log(`Error: ${error}`));
  }, [date]);

  const updateDate = value =>{
    setDate(`${value.getFullYear().toString()}-${(value.getMonth()+ 1).toString().padStart(2,0)}-${value.getDate().toString().padStart(2,0)}`);
  };

  return (
    <div className="App">
      <Apod title={apod.title} description={apod.explanation} url={apod.url} copyright={apod.copyright} fnc={updateDate}/>
    </div>
  );
}

export default App;
