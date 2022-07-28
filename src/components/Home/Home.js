import React from "react";
import './Home.css';

export function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Pokédex App</h2>
            <h3>Here you can find info about any Pokémon!</h3>
            <p>This is a React project made by <b>Randoraz</b></p>
            <p>All info was obtained from the <b>PokéAPI</b></p>
            <p><b>Pokémon</b> is owned by <b>Nintendo</b></p>
            <br/>
            <br/>
            <p>Images of Pokémon after number 649 aren't animated</p>
        </div>
    )
}