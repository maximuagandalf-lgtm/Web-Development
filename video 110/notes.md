### List rendering in react

## Conditional rendering
- ternary operator is used along with states to implements the conditions

- this is used in react insted of if-else and else statement ladders

- eg:-  
        const [showbtn, setshowbtn] = useState(false)

        {showbtn?<button>I will be shown when second button is clicked</button>:"thenga"}

        {showbtn && <button>I will be only shown when second button is clicked</button>}

## rendering lists syntax --
- This is the how lists are rendered in react
- const [todo, settodo] = useState([{ //declaration of state
    title: "Hey",
    desc: "I am a good todo",
  },
  {
    title: "Hey Another todo",
    desc: "I am a good todo too"
  },
  {
    title: "Hey i am a grocery todo",
    desc: "I am a good todo but i am a grocery todo"
  }])

- a for loop is to be added so as to access the lists one by one
- {todos.map(item => { 

            return <div className=" key = {todo.title} border m-4 border-1 border-purple-400">

              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          })}
