import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setform] = useState({email: "", phone:""})

  const handlechange = ()=>{
    alert("Hey! button has been clicked")
  }

  const handlechange2 = ()=>{
    alert("Hey! U are hovering over the button")
  }

  const handleformchange = (e)=>{
    setform({...form, [e.target.name]:[e.target.value]})
    console.log(form)
  }

  return (
    <>
    <div className="container">
      <button onClick={handlechange}>Click me</button>

      <button onMouseOver={handlechange2}>Hover me</button>

      <input type="text" name='email' value={form.email} onChange={handleformchange}/>

      <input type="text" name='phone' value={form.phone} onChange={handleformchange}/>
    </div>
    </>
  )
}

export default App
