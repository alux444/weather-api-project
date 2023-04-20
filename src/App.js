import React, {useState} from 'react'
import './App.css'

import ERROR from './img/error.png'
import Clouds from './img/clouds.png'
import Cloudy from './img/cloudy.png'
import Rain from './img/rain.png'
import Snow from './img/snow.png'
import Sunny from './img/sunny.png'
import Thunder from './img/thunderstorm.png'
import Mist from './img/mist.png'

const App = () => {

  const [data, setData] = useState({})
  const [city, setCity] = useState('')
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const fetchData = () => {
  
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.log(err))
  }

  const submitHandler = e => {
    e.preventDefault()
    fetchData()
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
      <div className='container fade-animation'>
        <form className='searchbox'
        onSubmit={submitHandler}>
          <input className='searchbar' 
          type="text" 
          value={city}
          onChange={handleChange}
          placeholder='Enter your city'/>
          <button className='btn submit-btn'> Submit </button>
      </form>
      <div className="images animation">
      {data.current ? data.current.condition.code === 1000 ? <img src={Sunny} alt="sunny"/> : null : null}
      {data.current ? data.current.condition.text.includes("Partly cloudy") ? <img src={Clouds} alt="clouds"/> : data.current.condition.text.includes("Overcast" || "Cloudy") ? <img src={Cloudy} alt="cloudy"/> : null : null}
      {data.current ? data.current.condition.text.includes("Mist" || "Fog") ? <img src={Mist} alt="mist"/> : null : null}
      {data.current ? data.current.condition.text.includes("thunder") ? <img src={Thunder} alt="thunder"/> :
      data.current.condition.text.includes("rain" || "drizzle") ? <img src={Rain} alt="rain"/> : null : null}
      {data.current ? data.current.condition.text.includes("snow" || "sleet") ? <img src={Snow} alt="snow"/> : null : null}

      {data.error ? <img className="animation" src={ERROR} alt='error'/> : null}
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

export default App