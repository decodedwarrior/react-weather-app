import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from'../assets/search.jpg'
import drizzel_icon from'../assets/drizzel.jpg'
import humidi_icon from'../assets/humidi.png'
import rain_icon from'../assets/rain.png'
import wind_icon from'../assets/wind.png'
import clear_icon from'../assets/clear.png'


const Weather = () => {
    
    const search = async (city)=>{
        try{
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);  
        }catch(error){

        }
    }
    useEffect(()=>{
        search("London");
    },[])

  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search here'/>
            <img src={search_icon} alt=" "/>
        </div>
        <img src={clear_icon} alt="" classsName="weather-icon"/>
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>
        <div className='weather-data'>
            <div className="col">
                <img src={humidi_icon} alt=""/>
                <p>91%</p>
                <span>Humidity</span>
            </div>
            <div className="col">
                <img src={wind_icon} alt=""/>
                <p>3.6 km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
        
    </div>
  )
}

export default Weather