import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/jokes')
    .then((response) =>{
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  
  return (
    <>
      <h1>Let's Go...!!</h1>
      <h2>{jokes.length} jokes found.</h2>

      {
        jokes?.map((joke) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h4>{joke.content}</h4>
            </div>
          )
        })
      }
    </>
  )
}

export default App
