import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard1 from './homeTabs/homePage1';
import Dashboard2 from './homeTabs/homePage2';
import Dashboard3 from './homeTabs/homePage3';

const Tab = createBottomTabNavigator();

export default function Layout3() {
    return (
        <Tab.Navigator initialRouteName='dash2'>
            <Tab.Screen name='dash2' component={Dashboard2} options={{headerShown: false, tabBarStyle:{display:'none'}}} />
            <Tab.Screen name='dash1' component={Dashboard1} options={{headerShown: false, tabBarStyle:{display:'none'}}} />
            <Tab.Screen name='dash3' component={Dashboard3} options={{headerShown:false, tabBarStyle:{display:'none'}}} />
        </Tab.Navigator>
    );
}