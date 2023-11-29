
import "./App.css"
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import Registration from "./Routing/Registration";
import Singin from "./Routing/Singin";
function App() {
  return (
    <div >
      <BrowserRouter>
      <div id="routes">
      <NavLink to="/register" className="link">Regiter Page</NavLink>
      <NavLink to="/login" className="link">Sign in </NavLink>
      </div>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Singin/>} />
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
