
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' 
function App() {
  const [jokes, setJokes] = useState([])


  useEffect(()=>{
axios.get('/api/jokes')
.then((response)=>{
  setJokes(response.data)
})
.catch((error)=>{
  console.log(error)
})
  })
  return (
    <>

      <p style={{
border:"black solid ",
backgroundColor:"purple"
      }}>
        Jokes:{jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id} style={
            {
              border:"black solid",
              backgroundColor:" lightblue"
            }
          }>
            <h1>{joke.title}</h1>
            <p>{joke.content}</p>
          </div>

        ))

      }
    </>
  )
}

export default App
