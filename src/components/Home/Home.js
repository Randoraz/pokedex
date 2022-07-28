import React from "react";
import './Home.css';

export function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Pokédex App</h2>
            <h3>Here you can find info about any Pokémon!</h3>
            <p>This is a React project made by Randoraz</p>
            <p>All info was obtained from the PokéAPI</p>
            <p>Pokémon is owned by Nintendo</p>
            <br/>
            <br/>
            <p>Images of Pokémon after number 649 won't load</p>
        </div>
    )
}