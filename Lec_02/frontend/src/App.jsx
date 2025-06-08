import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // axios.get('http://localhost:4000/api/V1jokes') we have to standardise it till local4000 as this is variable
    // we can use proxys

    axios.get('/api/V1jokes')
    // axios.get('http://localhost:4000/api/V1jokes') as we are using proxy
      .then(res => setJokes(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1 style={{color:"red"}}>JavaScript and Backend</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.text}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
