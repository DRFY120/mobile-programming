import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>PokéDex</Text>
            
            <Image
                source={require('../../images/9c354ff3912c9238ac46b3aea4bd52fd.gif')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        marginTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: '#E53939',
        flexDirection: 'row',
        alignItems: 'center', // Alinea los elementos verticalmente al centro
        justifyContent: 'center', // Alinea los elementos horizontalmente al centro
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center', // Alinea el texto al centro horizontalmente
    },
    logo: {
        width: 40,
        height: 40,
    },
});

export default Navbar;
