import React, {useState} from 'react'
import './App.css'

import WeatherBox from './components/WeatherBox'

const App = () => {

  const [data, setData] = useState({})
  const [city, setCity] = useState('')
  const [active, setActive] = useState([])
  
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
    if (active.indexOf("firstBox") === -1) {
      setActive('firstBox')
    } 
  }

  const clearHandler = e => {
    e.preventDefault()
    setData({})
  }


  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
      <div>
        <form className='searchbox container'>
          <input className='searchbar' 
          type="text" 
          value={city}
          onChange={handleChange}
          placeholder='Enter your city'/>
          <button className='btn submit-btn'
          onClick={submitHandler}> Submit </button>
          
          <button
            className='btn submit-btn'
            onClick={clearHandler}
            >
              Clear
          </button>    
      </form>
      
        <div className='weatherRows'>
          {active.indexOf("firstBox") === -1 ? 
          null :
          <WeatherBox className='container' 
          title='box1' 
          data={data}
          >    
          </WeatherBox>}
        </div>

      </div>
    )
}

export default App