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

// installed: npm install --save react-responsive don't know which to apply
// https://www.browserstack.com/guide/how-to-make-react-app-responsive#:~:text=To%20use%20the%20react%2Dresponsive,to%20install%20it%20using%20npm.&text=Once%20the%20library%20is%20installed,it%20into%20our%20React%20component.&text=This%20React%20component%20uses%20the,orientation%20of%20the%20user's%20device.

export default function App() {
  // tried to move below to product list all info on front end disappeared

  //const [currentJamProfile, setCurrentJamProfile] = useState(null);

 // const showJamProfile = async (id) => {
    // showJamProfile isn't working here
    //present from fetching the same jam twice
  //  if (currentJamProfile && currentJamProfile.id === id) return;
  //  try {
  //    const result = await fetch(`http://localhost:5000/products/${id}`);
  //    if (result.ok) {
  //      const data = await result.json();
  //      setCurrentJamProfile(data[0]);
  //    } else {
  //      console.log(`server error: ${result.status}`);
  //      throw new Error("Something went wrong");
  //    }
  //  } catch (err) {
  //    console.error(err);
  //  }
  //};

  return (
    <div className="m-4">
      {/* <div className="row-6"> */}
      {/* <button>basket</button> */}
      {/* </div> */}
      {/* Are these 2 lines of code still needed now its in routes */}
      {/*<nav>
        // Shows on page but not nut showing the same content
        <ul>
          <li>
            <Link to="/">ProductList</Link>
          </li>
          <li>
            <Link to="/product">JamProfile</Link>
          </li>
        </ul>
      </nav>*/}
      {/* <ProductList /> */}


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
//1st component
// different component not this file - homepage or product list - DONE
// state for list of all jams - DONE
// use effect to get all jams - DONE
// map through the state to display the jams - DONE
// 2nd step
//new component - jam (single jam)- DONE
//state for a jam - NOT DONE DIDN'T WORK
// use effect to get jam by id - hard code the id to get the first jam only
// display the jam

// when this is working - add the router next...
// export default App;

// need to do cd client
// npm run dev... from slides
// then add to package json
// add to main.jsx the browser routes
// then app.jsx import routes from react router dom
// this is front end routing
// can create nested routes  e.g. show full list of students then individual student

// need to import any components e.g. home page, product page

// e.g. students - Link to a new page
