import React, {useState} from 'react'
import './App.css'

import WeatherBox from './components/WeatherBox'

const App = () => {

  const [data, setData] = useState({})
  const [city, setCity] = useState('')
  const [active, setActive] = useState(['firstBox'])
  
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
    console.log(data)
    console.log(active)
  }


  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
      <div>
        <form className='searchbox container'
        onSubmit={submitHandler}>
          <input className='searchbar' 
          type="text" 
          value={city}
          onChange={handleChange}
          placeholder='Enter your city'/>
          <button className='btn submit-btn'> Submit </button>
      </form>
      
        <div className='weatherRows container'>
          {active.indexOf("firstBox") !== -1 ? 
          <WeatherBox title='box1' data={data}>    
          {/* <button
            className='btn submit-btn delete-btn'
            onSubmit={event => {
              active.splice(active.indexOf("firstBox"),1)
            }}>
            X
          </button> */}
          </WeatherBox> : null}

        </div>

      </div>
    )
}

export default App