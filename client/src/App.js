import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar';

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
