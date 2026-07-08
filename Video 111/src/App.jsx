import { useState, useEffect } from 'react'
import "./card.css"
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let carddata = await a.json()
    setData(carddata)
    console.log(carddata)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  
  

  return (
        <>
        <div className="container">
          {data.map((card)=>{
            return <div className="card">
                          <h1>{card.title}</h1>
                          <p>{card.body}</p>
                          <p>{card.id}</p>
                          <p>{card.userId}</p>
                          </div>
          })}
        </div>
        </>
  )
}

export default App
