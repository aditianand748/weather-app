import React from 'react'
import './Weather.css'
import search_icon from '../assets/search-icon.avif'
import cloudy_icon from '../assets/cloudy.jpg'
import extremerainy_icon from '../assets/extremerainy.avif'
import rainy_icon from '../assets/rainy.jpg'
import sunny_icon from '../assets/sunny.jpg'
import weather_icon from '../assets/weather.png'
import windy_icon from '../assets/windy-icon.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>
        <img src={weather_icon} alt="" className='weather-icon'/>
        <p className='temperature'>16c</p>
        <p className='location'>London</p>
        <div className="weather-data">
            <div className="col">
                <img src={cloudy_icon} alt="" />
                <div>
                    <p>91 %</p>
                    <span>cloudy</span>
                </div>
            </div>
             <div className="col">
                <img src={windy_icon} alt="" />
                <div>
                    <p>36 km/hr</p>
                    <span>windy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather