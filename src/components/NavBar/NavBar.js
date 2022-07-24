import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

        export function NavBar() {
return (
        <nav className="navbar">
            <NavLink exact to="/" className="navlink" activeClassName="active-navlink" key="home">Home</NavLink>
            <NavLink to="/list" className="navlink" activeClassName="active-navlink" key="list">List</NavLink>
            <NavLink to="/categories" className="navlink" activeClassName="active-navlink" key="categories">Categories</NavLink>
        </nav>
    );
}