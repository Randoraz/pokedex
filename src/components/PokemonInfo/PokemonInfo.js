import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getPokemon, captalizeFirstLetter } from "../../util/PokeAPI";

import './PokemonInfo.css';

export function PokemonInfo() {
    const [pokemon, setPokemon] = useState({});
    const [foundPokemon, setFoundPokemon] = useState(false);
    const [term, setTerm] = useState('');

    const { param } = useParams();
    const history = useHistory();

    useEffect(() => {
        if(param) {
            const getPokemonInfo = async () => {
                const pokemon = await getPokemon(param);
                if(pokemon) {
                    setPokemon(pokemon);
                    setFoundPokemon(true);
                    setTerm(pokemon.name);
                } else {
                    setFoundPokemon(false);
                }
            }

            getPokemonInfo();
        }        
    }, [param]);

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/pokedex/${term.toLowerCase()}`);
    };

    const handleChange = e => {
        setTerm(e.target.value);
    };

    const prevButton = () => {
        history.push(`/pokedex/${pokemon.id - 1}`);
    };

    const nextButton = () => {
        history.push(`/pokedex/${pokemon.id + 1}`);
    };

    return (
        foundPokemon ? //Use ? to check if variable exists before using 'map'
        <div className="pokemon-info"> 
            <h2 className="h2">{captalizeFirstLetter(pokemon.name)}</h2>
            <p className="p">{pokemon.id}</p>
            <div>
                {pokemon.types.map(type => {
                    return <p className="p" key={type.slot}>{captalizeFirstLetter(type.type.name)}</p>;
                })}
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type='text'
                    value={term}
                    placeholder='Search name or number'
                    onChange={handleChange} />
            </form>
            <button className="button" onClick={prevButton}>Prev</button>
            <button className="button" onClick={nextButton}>Next</button>
        </div>
        :
        <div className="pokemon-info">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type='text'
                    value={term}
                    placeholder='Search name or number'
                    onChange={handleChange} />
            </form>
        </div>
    );
}