import logo from './logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";
import { Button } from "react";


function App() {
  return (
    <div >
      <NavLink to="/createcorp">
      <Button >
        <p>Create Corp</p>
     </Button>
      </NavLink>
      <NavLink to="/payemployee">
      <Button >
        <p>Pay All Employee</p>
     </Button>
      </NavLink>
    </div>
    

  );
}

export default App;
