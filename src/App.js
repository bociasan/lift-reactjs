import logo from './logo.svg';
import './App.css';
import Lift from "./Components/Lift";
import {useEffect} from "react";



function App() {


  return (
    <div className="App">
      <Lift numberOfFloors={12}/>

    </div>
  );
}

export default App;
