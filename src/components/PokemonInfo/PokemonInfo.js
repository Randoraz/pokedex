import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getPokemon, captalizeFirstLetter } from "../../util/PokeAPI";

import './PokemonInfo.css';

import normal from '../../images/Types/GO_Normal.webp';
import fighting from '../../images/Types/GO_Fighting.webp';
import flying from '../../images/Types/GO_Flying.webp';
import poison from '../../images/Types/GO_Poison.webp';
import ground from '../../images/Types/GO_Ground.webp';
import rock from '../../images/Types/GO_Rock.webp';
import bug from '../../images/Types/GO_Bug.webp';
import ghost from '../../images/Types/GO_Ghost.webp';
import steel from '../../images/Types/GO_Steel.webp';
import fire from '../../images/Types/GO_Fire.webp';
import water from '../../images/Types/GO_Water.webp';
import grass from '../../images/Types/GO_Grass.webp';
import electric from '../../images/Types/GO_Electric.webp';
import psychic from '../../images/Types/GO_Psychic.webp';
import ice from '../../images/Types/GO_Ice.webp';
import dragon from '../../images/Types/GO_Dragon.webp';
import dark from '../../images/Types/GO_Dark.webp';
import fairy from '../../images/Types/GO_Fairy.webp';

export function PokemonInfo() {
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    const [foundPokemon, setFoundPokemon] = useState(false);
    const [notFoundMessage, setNotFoundMessage] = useState('');
    const [term, setTerm] = useState('');
    const [shiny, setShiny] = useState(false);

    const { param } = useParams();
    const history = useHistory();

    useEffect(() => {
        if(param) {
            const getPokemonInfo = async () => {
                setLoading(true);
                const pokemon = await getPokemon(param);
                if(typeof pokemon === 'object') {
                    setPokemon(pokemon);
                    setFoundPokemon(true);
                    setTerm(pokemon.name);
                    console.log(pokemon);
                } else if(typeof pokemon === 'string') {
                    setFoundPokemon(false);
                    setNotFoundMessage(pokemon);
                } else {
                    setFoundPokemon(false);
                }

                setLoading(false);
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

    const type1Button = () => {
        if(Object.keys(pokemon).length !== 0)
            history.push(`/types/${pokemon.types[0].type.name}`);
    };

    const type2Button = () => {
        if(Object.keys(pokemon).length !== 0 && pokemon.types.length > 1)
            history.push(`/types/${pokemon.types[1].type.name}`);
    };

    const prevButton = () => {
        if(Object.keys(pokemon).length !== 0 && pokemon.id > 1)
            history.push(`/pokedex/${pokemon.id - 1}`);
    };

    const nextButton = () => {
        if(Object.keys(pokemon).length !== 0)
            history.push(`/pokedex/${pokemon.id + 1}`);
        else
            history.push(`/pokedex/1`);
    };

    const displaySprites = (pokemon) => {
        if(shiny) {
            return pokemon.id < 650 ? pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny
                : pokemon.sprites.versions['generation-v']['black-white'].front_shiny;
        }
        
        return pokemon.id < 650 ? pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                : pokemon.sprites.versions['generation-v']['black-white'].front_default;
    }

    const shinyButton = () => {
        setShiny(!shiny);
    }

    const displayTypeImage = (type) => {
        switch(type.type.name) {
            case 'normal':
                return <img src={normal} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'fighting':
                return <img src={fighting} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'flying':
                return <img src={flying} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'poison':
                return <img src={poison} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'ground':
                return <img src={ground} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'rock':
                return <img src={rock} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'bug':
                return <img src={bug} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'ghost':
                return <img src={ghost} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'steel':
                return <img src={steel} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'fire':
                return <img src={fire} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'water':
                return <img src={water} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'grass':
                return <img src={grass} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'electric':
                return <img src={electric} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'psychic':
                return <img src={psychic} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'ice':
                return <img src={ice} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'dragon':
                return <img src={dragon} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'dark':
                return <img src={dark} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            case 'fairy':
                return <img src={fairy} alt={type.type.name} key={type.slot} className={`type${type.slot}`} />;
            default:
                break;
        }        
    };

    return (
        foundPokemon ? //Use ? to check if variable exists before using 'map'
        <div className="pokemon-info"> 
            <h2>{loading ? 'Loading...' : captalizeFirstLetter(pokemon.name)}</h2>
            <p className="p id">{loading ? '...' : pokemon.id}</p>
            <button className={shiny ? "shiny-button on" : "shiny-button off"} onClick={shinyButton}>&#10022;</button>
            <div className="img-div">
                <img className="pokemon-img" src={displaySprites(pokemon)} alt={pokemon.name} />
            </div>
            <div className="types">
                <div className="cell-div">
                    <button className="type-button" onClick={type1Button}>{displayTypeImage(pokemon.types[0])}</button>
                </div>
                <div className="cell-div">
                    <button className="type-button" onClick={type2Button}>{pokemon.types.length > 1 && displayTypeImage(pokemon.types[1])}</button>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type='text'
                    value={term}
                    placeholder='name or number'
                    onChange={handleChange} />
            </form>
            <button className="button prev" onClick={prevButton}>&lt; Prev</button>
            <button className="button next" onClick={nextButton}>Next &gt;</button>
        </div>
        :
        <div className="pokemon-info">
            <h2>{loading ? 'Loading...' : notFoundMessage ? notFoundMessage : 'Waiting...'}</h2>
            <div className="types">
                <div className="cell-div">
                    <button className="type-button"></button>
                </div>
                <div className="cell-div">
                    <button className="type-button"></button>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type='text'
                    value={term}
                    placeholder='name or number'
                    onChange={handleChange} />
            </form>
            <button className="button prev" onClick={prevButton}>&lt; Prev</button>
            <button className="button next" onClick={nextButton}>Next &gt;</button>
        </div>
    );
}