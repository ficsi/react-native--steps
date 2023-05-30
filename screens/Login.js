import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native'
import {auth} from "../config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('Successful login')
            })
            .catch((error) => {
                Alert.alert('Login error', error.message);
            })

    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
            />

            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                     >
                    <Text style={styles.text}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login;

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
