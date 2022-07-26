import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

        export function NavBar() {
return (
        <nav className="navbar">
            <NavLink exact to="/" className="navlink" activeClassName="active-navlink" key="home">Home</NavLink>
            <NavLink to="/pokedex" className="navlink" activeClassName="active-navlink" key="list">Pokédex</NavLink>
            <NavLink to="/types" className="navlink" activeClassName="active-navlink" key="categories">Types</NavLink>
        </nav>
    );
}