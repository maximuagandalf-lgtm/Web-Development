### Need of Redux -->

- with the help of redux we can store all the states we use in our complex app into "store.js".

- this "store.js" serves as a single source of truth from which we can use the states into any sub-component easily.

- this eliminates the need for complex prop drilling and useContext() hook. 

### setting up redux -->

- install redux with "npm i @reduxjs/toolkit react-redux"

- then add the following commmands into main.jsx -->
    " import {store} from "./redux/store.js" "
    " import { Provider } from 'react-redux' "

- with the above commande we 1st import the store from "./redux/store.js" into main.jsx and then import the provider, this gives access of states included in store.js to all the components and sub-components.

- for the last step, we will wrap <App /> in main.jsx, into provider tags like -->
    <Provider store={store}>
    <App />
    </Provider>

- copy boilerplater syntax from "https://redux-toolkit.js.org/tutorials/quick-start"

### advantages of Redux --> 
- it is easier to change the values of state

- reduces data redundancy and makes oyr code efficient and clean. 

### about redux
- we use useSelector(()=>) hook to read the state from redux after manipulation is complete

- we use useDispatch() hook to dispatch an action to redux, refer to App.jsx

- we can create our custom function objects for state updation in state_slice.js. 

- refer to App.jsx and
documentation for proper application