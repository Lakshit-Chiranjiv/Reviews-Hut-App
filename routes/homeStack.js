import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../components/Home";
import Details from "../components/Details";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#3d9dfc',
            },
            headerTintColor: '#fff',
        }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Details" component={Details} options={{ title: 'Review Details' }}/>
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;