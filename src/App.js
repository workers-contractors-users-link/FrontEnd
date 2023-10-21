import './App.css';
import Home from './Component/Pages/Home'
import Data from './Component/Pages/Data'
import About from './Component/Pages/About'
import Login from './Component/Pages/Login'
import Client from './Component/Pages/Client'
import Constructor from './Component/Pages/Constructor'
import Register from './Component/Pages/Register'
import Contact from './Component/Pages/Contact'
// import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<>
<BrowserRouter>
{/* <Navbar /> */}

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/client" element={<Client/>}/>
<Route path="/constructor" element={<Constructor/>}/>
<Route path="/data" element={< Data/>}/>
<Route path="/login" element={< Login/>}/>
<Route path="/register" element={< Register/>}/>
</Routes>
<Footer />
</BrowserRouter>

</>   
  );
}

export default App;
