import { useState, useEffect } from "react";
import "./App.css";
// if not in use/doesn't exist don't import e.g. vite logo and react logo

// import child components
import ProductList from "./components/ProductList"; // already in source so ./ then components
import JamProfile from "./components/JamProfile";
import { Routes, Route, Link } from "react-router-dom"; // need import route as well as main.jsx file
import Adminpage from "./components/Adminpage";
import Login from "./components/Login";
import Register from "./components/Register";


export default function App() {


  return (
    <div className="m-4">

      <nav className="navbar navbar-dark navbar-expand-lg bg-warning static-top" >
      {/*<nav className="d-flex justify-content-end">*/}
      <div className="container-fluid">
      <a href="#" className="navbar-brand">
                <img src="/src/components/jiggyjams.jpg" height="90" alt="jiggyjams"/>
            </a>

     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-3">
         {/* <a className="nav-linkactive" aria-current="page" href="#">*/}
          <Link to='/homepage'>HOMEPAGE</Link>
          {/* </a>*</ul> */}
        </li>

        <li className="nav-item mx-3">
          {/*<a className="nav-linkactive" aria-current="page" href="#">*/}
          <Link to='/login'>LOG IN</Link>
          {/*}  </a>*/}
        </li>

        <li className="nav-item mx-3">
          {/*<a className="nav-linkactive" aria-current="page" href="#">*/}
          <Link to='/register'>REGISTER</Link>
          {/*}  </a>*/}
        </li>

    
      </ul>
      </div>
      </div>
      </nav>

      <Routes>
        <Route path="/homepage" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<JamProfile />}></Route>
        <Route path="/adminpage" element={<Adminpage />}></Route>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>

      </Routes>
    </div>
  );
}
