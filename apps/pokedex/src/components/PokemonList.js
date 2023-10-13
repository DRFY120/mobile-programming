import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi'; 

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        fetchPokemonData("https://pokeapi.co/api/v2/pokemon?offset=30&limit=40");
    }, []);

    const fetchPokemonData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setNextPage(data.next);
            const detailedPokemonList = await Promise.all(data.results.map(async (pokemon) => {
                const detailedPokemon = await getPokemonByName(pokemon.name);
                return detailedPokemon;
            }));
            setPokemonList(prevList => [...prevList, ...detailedPokemonList]);
        } catch (error) {
            console.error("Error fetching Pokemon data: ", error);
        }
    };

    const loadMorePokemon = () => {
        if (nextPage) {
            fetchPokemonData(nextPage);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Link to={`/information/${item.id}`}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Image source={{ uri: item.sprites.front_default }} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Text>{item.name}</Text>
                </View>
            </Link>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Usa el ID como clave en lugar del nombre
                onEndReached={loadMorePokemon}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
}

export default PokemonList;