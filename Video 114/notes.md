### imp syntaxes --
- const newtask = task.filter((_,i)=>
      i !== index)
- filter function is used to remove elements from arrays and create a new array

- const handleAdd = ()=>{
    if (input.trim()==="") return
    settask([...task, input])
    setinput("")
  }

- .trim() is used to remove extra speces form front and back
- settask([...task, input]), this sets up the array in the form [...task, input]

- <!-- - {task.map((t, index)=>{
          return <Task key={index} text={t} onEdit={()=>handleEdit(index)} onDelete={()=>handleDelete(index)}/>
        })} -->
- instead of for loops, we use .map((elem, index)=>{}) function which returns an array
 and accesses each element one by one.
 - onEdit and onHandle are passed as props here accepted in task.jsx. 
 - index is parsed in handleEdit(index) and handleDelete(index) during the creation of tasks only, so as to edit and delete them later on. 

