import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"


export default function App() {

  let [dataAPI, setDataAPI] = useState(null);
  let [location, setLocation] =useState("cairo");
  async function getData(location)
  {
    /*destructing data is used to get the object data only from the API result*/ 
    let {data} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=9d714f258dfa4f9db99210831260404&q=${location}`);
    setDataAPI(data)
    console.log(data);
  }

  useEffect(() => {
    getData(location)
  }, [])

   function Search(e)
  {
    if (e.key === "Enter")
    {
      console.log("event value now",e.target.value)
      setLocation(e.target.value);
      getData(e.target.value);
    }
  }
  
  return (
    <div className="app">
      <div className="card ">
        <input
          type="text"
          onKeyDown={Search}
          placeholder="Enter the city"
          className="input "
        />

        {dataAPI && (
          <div className="weather">
            <h2>{dataAPI.location.name}, {dataAPI.location.country}</h2>
            <p className="time">{dataAPI.location.localtime}</p>

            <div className="temp">
              <h1>{dataAPI.current.temp_c}°C</h1>
              <img src={dataAPI.current.condition.icon} alt="" />
            </div>

            <p className="condition">{dataAPI.current.condition.text}</p>

            <div className="details">
              <p>💧 Humidity: {dataAPI.current.humidity}</p>
              <p>🌬 Wind: {dataAPI.current.wind_kph} kph</p>
              <p>☁ Cloud: {dataAPI.current.cloud}</p>
              <p>🌡 Feels like: {dataAPI.current.feelslike_c}°C</p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
