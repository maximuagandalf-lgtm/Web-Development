### memo in react
- import React from 'react'
import { memo } from 'react'

const NavBar = ({adjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      {adjective}
    </div>
  )
}

export default memo(NavBar)

- in the above case component Navbar will only be rendered if there is a change in props(adjective). 

- This stops the constant re-rendering everytime a state is changed in App.jsx. 

- saves resources and makes our web app efficeint.

### Need of useCallback() hook
- When app.jsx is re-rendered, all the functions declared are also re rendered, if there is a function passed as an prop to a component so react interprets as an change in the prop. Hence, memo fails here.

- We use useCallback() hook on the function passed as the prop which we do not want to change.

- syntax --> 
    const getadjective = useCallback(() => {
      return "this is another adjective"
    }, [])

- here, [] is similiar to other hooks, this is a dependency array which determines when the useCallback works and when it doesn't. Usually states are passed into it. So, when the state passed into dependency array is changed, the function is recreated otherwise it remain freesed/memoized. 

- useCallback and memo duo is only used when we have static functions. Incase of dynamic functions we must not use these and the values will not update along with every re render.

