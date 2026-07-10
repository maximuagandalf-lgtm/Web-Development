### React Router - 
## Need of React Router? 
- With the use of traditional anchor tage to load different pages, our webpage realoads evertytime an option/element is clicked.

- React router allows us to create "multipage web applications" without reloading.

- to install react router run "npm i react-router-dom".

- first import routerbrowser and reactprovider with 
"import {createBrowserRouter, RouterProvider} from 'react-router-dom' "

- then we will create objects for eact element which requires routing in function App(){} like 

- function App() {
    const router = createBrowserRouter([
      {
        path:"/",
      element: <><NavBar /><Home /></>
    },
      {
        path:"/login",
        element: <><NavBar /><Login /></>
      },
      {
        path:"/about",
        element:<><NavBar /><About/></>
      },
      {
        path: "/user/:username",
        element: <><NavBar /><User /></>
      }

    ])

- then we will call {RouterProvider router=(router)} inside return like 

- return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App 

- user.jsx file is how we accept parameters in multipage react website, this syntax can be used to create multiple user profile pages.

- <Link to="/path"><Link/> and <NavLink className={}><NavLink/> are used insted of anchortags.

- we have to specify path in Link tags but NavLink is used so that we can add ClassName={}.
we can check wether and element isActive or not such that <NavLink className={(e)=>{e.isActive?"red":""}}><NavLink/>.We have also used ternary operator syntax in this. 