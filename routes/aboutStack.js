import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import About from "../components/About";
import Header from "../components/Header";


const AboutStack = createNativeStackNavigator();

const AboutStackScreen = () => {
    return (
        <AboutStack.Navigator initialRouteName="About" screenOptions={{
            headerStyle: {
                backgroundColor: '#3d9dfc',
            },
            headerTintColor: '#fff',
        }}>
            <AboutStack.Screen name="About" component={About} options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} />,
                    headerLeft: () => null,
                }
            }} />
        </AboutStack.Navigator>
    );
}

export default AboutStackScreen;