### Event handling in react
- Similiar to onClick={}, there are multiple otherbuilt in events which we can use such as onMouseOver{} etc etc..

- when the event is triggered the function inside {} like onClick={function} is called.

- eg:- 
    const handleclick = ()=>{
    alert('Hey! I am clicked')
  }
return (
    <>
    <button onClick={handleclick}>Click me</button>
    </>
)

- Taking text input works differently in react.
- first a state is created 
    const [name, setname] = useState("Ayush")
- then a function which will be called when the text inside input bar chnages is declared
    const handlenamechange = (e)=>{
    setname(e.target.value)
    }

- and this is declared inside the DOM body 
    return (
    <>
    <!-- <input type="text" value={name} onChange={handlenamechange}/> -->
    </>
)

## taking multiple text inputs or creating a form 
- const [form, setform] = useState({email: "", phone:""})
- <!-- - const handleformchange = (e)=>{
    setform({...form, [e.target.name]:[e.target.value]})
    console.log(form)
  } -->
- return (
    <>
    <!-- <div className="container">
      <input type="text" name='email' value={form.email} onChange={handleformchange}/>

      <input type="text" name='phone' value={form.phone} onChange={handleformchange}/>
    </div> -->
    </>
  )