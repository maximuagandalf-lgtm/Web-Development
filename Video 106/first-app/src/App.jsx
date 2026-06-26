import React, { useState } from 'react'
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from './components/cards.jsx'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="App">
      <NavBar/>
      <div className="cardcontainer">
        <Cards title="Card 1" description = "Card 1 Desc"/>
      <Cards title="Card 2" description = "Card 2 Desc"/>
      <Cards title="Card 3" description = "Card 3 Desc"/>
      <Cards title="Card 4" description = "Card 4 Desc"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
