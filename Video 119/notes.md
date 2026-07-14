### body-parser
- installed by "npm i body-parser" as a separate package

- This is a middleware package for backend Express apps. 

- This is already built-in in modern express apps(express 4.16+) we do not need to separately install it. 

-  we can refference it by 
"app.use(express.json())" 
"app.use(express.urlencoded({extended: true}))". No need to import it.

### cors policy
- cors is a safty policy implemented by browsers, This prohibits communication between two different servers(react-frontend-5713 and localhost:300-backend servers in our case).

- to remove these restrictiions we have to "import cors from cors" and "app.use(cors())" in aur server.js.

### react-hook-form

- react-hook-form is a react library which provides use with boilerplate code and useful functions which make handling form much easier in react. 

- some of the most commonly used functions are:-
  1. register("input_name", {value_object})

  2. forState:{errors, isSubmitting}
        a. errors is the state which store every error we design.

        b. isSubmitting return wether teh form is currently being proccessed and stored over network or not, returns a boolean.

   3.  setError("error_name", {message: "error     message to be displayed"})

   4. {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
   // errors.blocked ke liye errors.blocked.message ko display kardo

   5. similarly - {errors.myform && <div className='red'>{errors.myform.message}</div>}

- refer to App.jsx for more in detail application of form handling and its functions in react. 