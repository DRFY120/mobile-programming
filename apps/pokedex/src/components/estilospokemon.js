import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDF5E6', 
    },
    text: {
        fontSize: 24,
        marginBottom: 15,
        fontFamily: 'serif',
        color: '#8B4513', 
    },
    imageContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginRight: 15,
        borderWidth: 4,
        borderColor: '#8B4513',
    },
    link: {
        marginTop: 30,
        backgroundColor: '#D2B48C', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    linkText: {
        fontSize: 20,
        color: '#8B4513',
        textAlign: 'center',
        fontFamily: 'serif', 
    },
});

export default styles;
