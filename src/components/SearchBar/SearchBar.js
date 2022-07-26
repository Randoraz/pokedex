import React from "react";
import { useState } from "react";

import { PokemonList } from '../PokemonList/PokemonList';

import './SearchBar.css';

export function SearchBar() {
    const [term, setTerm] = useState('');

    const onChange = e => {
        setTerm(e.target.value);
    }

    return (
        <div>
            <h2 className="h2">Search by Type</h2>
            <form className="form">
                <input
                    type="text"
                    className="input"
                    placeholder="Type in the pokémon name"
                    value={term}
                    onChange={onChange}/>
            </form>
            <PokemonList term={term} />
        </div>
    );
}