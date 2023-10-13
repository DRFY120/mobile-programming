const BASE_URL = new URL('https://pokeapi.co/api/v2/');
export async function getPokemonByName(name) {
    if (!name || name.trim() === '') {
        return Promise.reject({ error: 'El nombre del Pokémon no puede estar en blanco.' });
    }

    const URI = new URL(`pokemon/${name.toLowerCase()}`, BASE_URL);

    try {
        const resp = await fetch(URI.href);
        const pokemonData = await resp.json();
        const { id, name: pokemonName, sprites } = pokemonData;
        if (!resp.ok) {
            return Promise.reject(resp.json());

        }
        const pokemonWithAdditionalInfo = {
            id,
            name: pokemonName,
            sprites,
            ...pokemonData
        };
        return pokemonWithAdditionalInfo;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return Promise.reject(error);
    }
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    try {
        const resp = await fetch(URI.href);
        if (!resp.ok) {
            return Promise.reject(resp.json());
        }
        const pokemonData = await resp.json();
        const { id: pokemonId, name: pokemonName, sprites } = pokemonData;
        const pokemonWithAdditionalInfo = {
            id: pokemonId,
            name: pokemonName,
            sprites,
            ...pokemonData
        };

        return pokemonWithAdditionalInfo;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return Promise.reject(error);
    }
}
