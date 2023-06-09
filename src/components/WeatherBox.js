import React, {useState} from 'react'
import ERROR from '../img/error.png'
import Clouds from '../img/clouds.png'
import Cloudy from '../img/cloudy.png'
import Rain from '../img/rain.png'
import Snow from '../img/snow.png'
import Sunny from '../img/sunny.png'
import Thunder from '../img/thunderstorm.png'
import Mist from '../img/mist.png'

const WeatherBox = ({data}) => {

    return (

    <div className="weather-rows">


    <div className="images">
    {data.current ? 
    data.current.condition.code === 1000 ? <img src={Sunny} alt="sunny"/> : null : null}

    {data.current ? 
    data.current.condition.text.toLowerCase().includes("partly cloudy") ? 
    <img src={Clouds} alt="clouds"/> : 
    data.current.condition.text.toLowerCase().includes("overcast") || 
    data.current.condition.text.toLowerCase().includes("cloudy") ? <img src={Cloudy} alt="cloudy"/> : null : null}


    {data.current ? 
    data.current.condition.text.toLowerCase().includes("mist") || 
    data.current.condition.text.toLowerCase().includes("fog") ? <img src={Mist} alt="mist"/> : null : null}

    {data.current ? 
    data.current.condition.text.toLowerCase().includes("thunder") ? <img src={Thunder} alt="thunder"/> :
    data.current.condition.text.toLowerCase().includes("rain") || 
    data.current.condition.text.toLowerCase().includes("drizzle") ? <img src={Rain} alt="rain"/> : null : null}

    {data.current ? 
    data.current.condition.text.toLowerCase().includes("snow") || 
    data.current.condition.text.toLowerCase().includes("sleet") ||
    data.current.condition.text.toLowerCase().includes("blizzard") ||
    data.current.condition.text.toLowerCase().includes("pellets") ? <img src={Snow} alt="snow"/> : null : null}

    {data.error ? <img src={ERROR} alt='error'/> : null}
    </div>

    <div className='weather-container'>
        <div className='weather-box'>
          {data.current ? (<p display='inline'>{data.current.condition.text}</p>)
             : null}
          {data.current ? (<p display='inline'>{data.location.name},{data.location.country}</p>)
             : null} 
          {data.current ? (<p display='inline'>Temperature: {data.current.temp_c}°C</p>)
             : null}
          {data.current ? (<p display='inline'>Feels like: {data.current.feelslike_c}°C</p>)
             : null}
          {data.current ? (<p display='inline'>Wind Speed: {data.current.gust_kph} kmph</p>)
             : null} 
          {data.current ? (<p display='inline'>Humidity: {data.current.humidity}%</p>)
             : null} 
          
    </div>
    </div>
    </div>
  )
}

export default WeatherBox