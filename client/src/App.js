import './App.css';
import {Routes, Route} from "react-router-dom";
import Signup from "./components/Signup"
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
      
      </Routes>
    </div>
  );
}

export default App;
