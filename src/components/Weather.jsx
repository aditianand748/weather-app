import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search-icon.avif'
import cloudy_icon from '../assets/cloudy.jpg'
import extremerainy_icon from '../assets/extremerainy.avif'
import rainy_icon from '../assets/rainy.jpg'
import sunny_icon from '../assets/sunny.jpg'
import weather_icon from '../assets/weather.png'
import windy_icon from '../assets/windy-icon.png'

const Weather = () => {

      const [weatherData, setWeatherData] = useState(false);

      const allIcons = {

        "01d": clear_icon,
        "o1n": clear_icon,
        "02d": cloudy_icon,
        "02n": cloudy_icon,
        "03d": cloudy_icon,
        "03n": cloudy_icon,
        "04d": extremerainy_icon,
        "04n": extremerainy_icon,
        "09d": rainy_icon,
        "09n": rainy_icon,
        "10d": sunny_icon,
        "10n": sunny_icon,

      }

     const search= async (city)=>{
        try{
         const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

         const response = await fetch(url);
         const data= await response.json();
         console.log(data);
         const icon = allIcons[data.weather[0].icon] || clear_icon;
         setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
         })
        } catch(error) {

        }
     }
          useEffect(()=>{
            search("New York");
          },[])


  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            
             <div className="col">
                <img src={windy_icon} alt="" />
                <div>
                    <p>{weatherData.windspeed} km/h</p>
                    <span>windy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather