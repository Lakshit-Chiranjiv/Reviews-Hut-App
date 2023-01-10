import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AboutStackScreen from './aboutStack';
import HomeStackScreen from './homeStack';

const RootDrawerNavigator = createDrawerNavigator()

const Drawer = () => {

    return (
        <NavigationContainer>
            <RootDrawerNavigator.Navigator>
                <RootDrawerNavigator.Screen name="Home" component={HomeStackScreen} />
                <RootDrawerNavigator.Screen name="About" component={AboutStackScreen} />
            </RootDrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default Drawer