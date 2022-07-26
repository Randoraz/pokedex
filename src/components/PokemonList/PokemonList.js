import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import { getPokemonsByType, captalizeFirstLetter } from "../../util/PokeAPI";

import './PokemonList.css';

export function PokemonList(props) {
    const [term, setTerm] = useState('');
    const [id, setId] = useState(0);
    const [pokemon, setPokemon] = useState([]);
    const [pokemonToDisplay, setPokemonToDisplay] = useState([]);

    const { type } = useParams();

    useEffect(() => {
        const fillPokemonsArray = async () => {
            const pokemonArray = await getPokemonsByType(type);
            setPokemon(pokemonArray);
        }

        fillPokemonsArray();
    }, [type]);

    useEffect(() => {
        setTerm(props.term);
    }, [props.term]);

    useEffect(() => {
        const searchPokemon = term => {
            const currentPokemons = pokemon.filter(pokemon => {
                return pokemon.name.includes(term.toLowerCase());
            });

            setPokemonToDisplay(currentPokemons);
        }

        searchPokemon(term);
    }, [term, pokemon]);

    const getIDFromURL = (url) => {
        const strArray = url.split('/');
        const idArray = strArray.filter(str => {
            return !isNaN(str) && str !== '';
        });
        return idArray[0];
    }

    return (
        <div className="pokemon-list">
            <h3 className="h3">{`${captalizeFirstLetter(type)} Pokémon`}</h3>
            <ol className="list">
                {pokemonToDisplay.map(pokemon => {
                    return <li className="pokemon" key={pokemon.name}><NavLink to={`/pokedex/${getIDFromURL(pokemon.url)}`} className="pokemon-link">{captalizeFirstLetter(pokemon.name)}</NavLink></li>;
                })}
            </ol>
        </div>
        
    );
}