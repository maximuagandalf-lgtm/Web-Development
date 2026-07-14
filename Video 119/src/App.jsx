import { useState } from 'react'
import './App.css'
import { useForm} from "react-hook-form"
function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    formState:{errors, isSubmitting},
    setError
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    //await delay(2) //we are simulating a loader as it takes time to store username and password over network.

    let a = await fetch('http://localhost:3000/', {method: 'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(data)
    })
    let res = await a.text()
    console.log(data, res)
    
    if(data.username !== "ayush@2076"){
      setError("myform", {message: "Invalid username"})
      }

    if(data.username==="rohan"){
      setError("blocked", {message: "Your account is blocked."})
    }

    if (data.password !== "ayush2076"){
      setError("myform", {message: "Invalid password"})
    }
  }
  return (
    <>
    {isSubmitting && <div class="loading">Loading...</div>}
    
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input {...register("username", {required:true, minLength: {value:3, message:"username should be longer than 3 characters"}, maxLength:{value:12, message: "username should be shorter than 12 characters"}})} type="text" placeholder='username' />

          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input  {...register("password", {required:true, minLength:{value: 6, message:"password should have minimum 6 characters"}, maxLength:{value: 12, message: "password can have at max 12 characters"}
          })} type="password" placeholder='password' />

          {errors.password && <div className="red">{errors.password.message}</div>}
          
          <input disabled={isSubmitting} type="submit" value='Submit' />

          {errors.myform && <div className='red'>{errors.myform.message}</div>}

          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
