import logo from './logo.svg';
import './App.css';
import"./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <BrowserRouter>
    
    {/* <Home/> */}

    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
