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
                <RootDrawerNavigator.Screen name="HomeDrawer" component={HomeStackScreen} options={{ headerShown: false, title: "Home" }}/>
                <RootDrawerNavigator.Screen name="AboutDrawer" component={AboutStackScreen} options={{ headerShown: false, title: 'About' }}/>
            </RootDrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default Drawer