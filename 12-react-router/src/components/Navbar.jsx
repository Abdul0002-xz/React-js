import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>

        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to = "/" className={({isActive})=> isActive ? "active-link" : ""} >Home</NavLink>
        </li>

        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink to= "/about" className={({isActive})=> isActive ? "active-link" : ""}  >About</NavLink>
        </li>

        <li>
          {/* <Link to="/dashboard">Dashboard</Link> */}
            <NavLink to= "/dashboard" className={({isActive})=> isActive ? "active-link" : ""} >Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
