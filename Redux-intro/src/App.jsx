import { useState } from 'react'
import NavBar from './components/NavBar'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, multiply, incrementByAmount, decrementbyAmount } from './redux/counter/counterSlice'
import './App.css'


function App() {
  // const [count, setCount] = useState(2)

  const count = useSelector((state)=> state.counter.value) 
  // adjust path based on your slice, we use this instead of normal useState snippets for every state being passed to redux
  

  const dispatch = useDispatch()

  return (
    <>
    <NavBar />
    <div>
      <button onClick={()=> dispatch(increment())}>+</button>
     Currently count is: {count}
     <button onClick={()=>dispatch(decrement())}>-</button>

      <button onClick={()=> dispatch(incrementByAmount(5))}>Increment by amount</button>

      <button onClick={()=> dispatch(multiply())}>Multiply</button>

      <button onClick={()=>dispatch(decrementbyAmount(5))}>DecrementbyAmount</button>

    </div>
    </>
  )
}

export default App

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux
