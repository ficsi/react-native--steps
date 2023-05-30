import * as React from 'react';
import {KeyboardAvoidingViewComponent, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer style={styles.container}>
                <Stack.Navigator>
                    {/*<Stack.Screen options={{headerShown: false}} name='Home' component={Home}/>*/}
                    <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
