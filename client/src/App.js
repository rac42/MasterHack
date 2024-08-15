import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import Projects from './pages/Projects'
import About from "./pages/About";
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="about" element={<About/>} />
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
