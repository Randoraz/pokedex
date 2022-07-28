import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

        export function NavBar() {
return (
        <nav className="navbar">
            <NavLink exact to="/home" className="navlink" activeClassName="active-navlink" key="home">Home</NavLink>           {/*For GitHub Pages */}
            <NavLink to="/pokedex" className="navlink" activeClassName="active-navlink" key="list">Pokédex</NavLink>
            <NavLink to="/types" className="navlink" activeClassName="active-navlink" key="categories">Types</NavLink>
        </nav>
    );
}