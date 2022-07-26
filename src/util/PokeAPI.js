export const getTypes = async () => {
    try {
        const typesArray = await fetch('https://pokeapi.co/api/v2/type', {cache: 'default'})
            .then(response => {
                if(response.ok)
                    return response.json();
            })
            .then(jsonResponse => {
                const types = jsonResponse.results.map(type => {
                    return type.name;
                })
                return types;
            });
        return typesArray;
    } catch(error) {
        console.log(error);
    }
}

export const getPokemonsByType = async (type) => {
    try {
        const pokemonsArray = await fetch(`https://pokeapi.co/api/v2/type/${type}`, {cache: 'default'})
            .then(response => {
                if(response.ok)
                    return response.json();
            })
            .then(jsonResponse => {
                const pokemons = jsonResponse.pokemon.map(pokemon => {
                    return pokemon.pokemon;
                })
                return pokemons;
            });
        return pokemonsArray;
    } catch(error) {
        console.log(error);
    }
}

export const getPokemon = async (param) => {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`, {cache: 'default'})
            .then(response => {
                if(response.ok)
                    return response.json();
            });
        return pokemon;
    } catch(error) {
        console.log(error);
    }
} 

export const captalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}