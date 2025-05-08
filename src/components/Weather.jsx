import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.jpg';
import drizzel_icon from '../assets/drizzel.jpg';
import humidi_icon from '../assets/humidi.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';
import clear_icon from '../assets/clear.png';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("London");

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        search(city);
    }, [city]);

    const handleSearch = () => {
        const inputCity = document.querySelector('.search-bar input').value;
        if (inputCity) setCity(inputCity);
    };

    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='search here' />
                <img src={search_icon} alt="Search icon" onClick={handleSearch} />
            </div>
            {weatherData && (
                <>
                    <img src={clear_icon} alt="Weather icon" className="weather-icon" />
                    <p className='temperature'>{weatherData.main.temp}°C</p>
                    <p className='location'>{weatherData.name}</p>
                    <div className='weather-data'>
                        <div className="col">
                            <img src={humidi_icon} alt="Humidity icon" />
                            <p>{weatherData.main.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                        <div className="col">
                            <img src={wind_icon} alt="Wind icon" />
                            <p>{weatherData.wind.speed} km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Weather;