import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Home from "../components/Home";
import Details from "../components/Details";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName="Home">
                <HomeStack.Screen name="Home" component={Home} />
                <HomeStack.Screen name="Details" component={Details} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStackScreen;