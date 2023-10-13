import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import styles from '../components/estilospokemon';

function Information() {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Informacion del Pokemon</Text>
            {pokemon && (
                <View>
                    <Text style={styles.text}>Numero de Poe: {pokemon.id}</Text>
                    <Text style={styles.text}>Nombre: {pokemon.name}</Text>
                    <Text style={styles.text}>Altura: {pokemon.height} m</Text>
                    <Text style={styles.text}>Peso: {pokemon.weight} Kg</Text>
                    <Text style={styles.text}>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
                    <Text style={styles.text}>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
                    <Text style={styles.text}>Nivel de Experiencia: {pokemon.base_experience}</Text>
                    <Text style={styles.text}>Tipo: {pokemon.order}</Text>
                    <Text style={styles.text}>Evolucion: {pokemon.forms.map(form => form.name).join(', ')}</Text>
                    <Text style={styles.text}>Pokemon:</Text>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
                        <Image source={{ uri: pokemon.sprites.back_default }} style={styles.image} />
                    </View>
                </View>
            )}
            <Link to='/' style={styles.link}>
                <Text style={styles.linkText}>Regresar</Text>
            </Link>
        </View>
    );
}

export default Information;

