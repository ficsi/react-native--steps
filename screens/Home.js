import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import GetLocation from 'react-native-get-location'

const Home = () => {
    const getLocation = () => {
        GetLocation.getCurrentPosition().then(location => {
                console.log(location);
            })
            .catch(error => {
                const {code, message} = error;
                console.warn(code, message);
            })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={getLocation}>
                <Text style={styles.text}>GET IT!</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home
const styles = StyleSheet.create({
    container: {
        width: '60%',
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'green'
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
        width: '100%',
        margin: 40,
        color: 'white',
        backgroundColor: '#0782f9'

    },
    text: {
        alignItems: "center",
        color: 'white',
        fontSize: 16,
    }
})