import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer'
function App() {
  const[value, setValue] = useState(0);  //we will change the "value" with setValue and default vaule is 0.

  return (
    <div className="App">
      <NavBar logotext = "CodeWithHarry"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click Me</button>
      <Footer/>
    </div>
  );
}

export default App;
