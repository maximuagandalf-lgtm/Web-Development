import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Task from './components/task'

function App() {
  const [input, setinput] = useState("")
  const [task, settask] = useState([])
  // always install tailwind using cli only

  const handlenewtask = (e)=>{
    setinput(e.target.value)
  }

  const handleAdd = ()=>{
    if (input.trim()==="") return
    settask([...task, input])
    setinput("")
  }

  const handleEdit = (index)=>{
    setinput(task[index])
  }

  const handleDelete = (index)=>{
    const newtask = task.filter((_,i)=>
      i !== index)
    settask(newtask)
  }

  return (
    <>
    <div className="container bg-blue-500 min-h-[110vh] min-w-full">
      <NavBar/>
      <div className="content bg-white rounded-xl w-[50vw] h-[75vh] relative top-[10vh] left-[25vw] overflow-scroll">
        <div className="task flex gap-4 items-center justify-center relative top-5">
          <input type="text" name='task' value={input} onChange={handlenewtask} className='border rounded w-[25vw] h-[37px] p-2'/>
          <button className=" hover:bg-blue-600 transition duration-500 bg-blue-500 text-white p-2 min-h-fit min-w-fit rounded h-[4.5vh] w-[5vw] p-2 cursor-pointer" onClick={handleAdd}>Add</button>
        </div>

        {task.map((t, index)=>{
          return <Task key={index} text={t} onEdit={()=>handleEdit(index)} onDelete={()=>handleDelete(index)}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App
