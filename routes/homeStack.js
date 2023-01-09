import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Home from "./components/Home";
import Details from "../components/Details";

const screens = {
    Home: {
        screen: Home,
    },
    Details: {
        screen: Details,
    },
}

const HomeStack = createNativeStackNavigator(screens);

export default NavigationContainer(HomeStack);