import React from 'react'
import './Weather.css'
import search_icon from '../assets/search-icon.avif'
import cloudy_icon from '../assets/cloudy.jpg'
import extremerainy_icon from '../assets/extremerainy.avif'
import rainy_icon from '../assets/rainy.jpg'
import sunny_icon from '../assets/sunny.jpg'
import weather_icon from '../assets/weather.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>
        <img src={weather_icon} alt="" className='weather-icon'/>
        <p>16c</p>
        <p>London</p>

    </div>
  )
}

export default Weather