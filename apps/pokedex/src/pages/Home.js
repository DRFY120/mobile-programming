import React, { useState } from 'react';
import { Button, Text, View, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Link } from 'react-router-native';
import PokemonList from '../components/PokemonList';
import { getPokemonByName } from '../services/pokeapi';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FDF5E6', // Color beige claro
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    errorText: {
        color: '#8B4513', // Color marrón oscuro
        fontSize: 16,
        fontFamily: 'serif', // Fuente estilo antiguo
        marginTop: 20,
    },
    pokemonImage: {
        height: 250,
        width: 250,
        borderWidth: 4,
        borderColor: '#8B4513', // Color del borde marrón oscuro
        marginVertical: 20,
    },
    pokeballImage: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    input: {
        fontSize: 18,
        fontFamily: 'serif', // Fuente estilo antiguo
        borderBottomWidth: 1,
        borderColor: '#8B4513', // Color del borde marrón oscuro
        width: '70%',
    },
};

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        if (pokemonName.trim() === '') {
            Alert.alert('Error', 'Escribe un nombre de Pokemon válido');
            return;
        }

        setLoading(true);
        setError(false);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#8B4513' />}
                {!loading && error && <Text style={styles.errorText}>Pokémon no encontrado.</Text>}
                {!loading && pokemon && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image style={styles.pokemonImage} source={{ uri: pokemon?.sprites?.front_default }} />
                    </Link>
                )}
                {!pokemon && !loading && <Image  style={{ width: 100, height: 100 }}   source={require('../../assets/pokebola.png')} />}
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handdleChangeText}
                        placeholder='¡Busca un Pokémon!'
                    />
                    <Button onPress={handdlePress} title='Buscar' />
                </View>
            </View>
            <View>
                <PokemonList></PokemonList>
            </View>
        </View>
    );
}

export default Home;
