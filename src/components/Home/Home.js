import React from "react";
import './Home.css';

export function Home() {
    return (
        <div>
            <h2 className="h2">Welcome to the Pokédex App</h2>
            <h3 className="h3">Here you can find info about any Pokémon!</h3>
            <p className="p">This is a React project made by Randoraz</p>
            <p className="p">All info was obtained from the PokéAPI</p>
            <p className="p">Pokémon is owned by Nintendo</p>
        </div>
    )
}