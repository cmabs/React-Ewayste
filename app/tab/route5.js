import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CDashboard1 from './collectorHomeTabs/cHomePage1';
import CDashboard2 from './collectorHomeTabs/cHomePage2';
import CDashboard3 from './collectorHomeTabs/cHomePage3';
import CDashboard4 from './collectorHomeTabs/cHomePage4';

const Tab = createBottomTabNavigator();

export default function Layout5() {
    return (
        <Tab.Navigator initialRouteName='dash2'>
            <Tab.Screen name='dash2' component={CDashboard2} options={{headerShown: false, tabBarStyle:{display:'none'}}} />
            <Tab.Screen name='dash1' component={CDashboard1} options={{headerShown: false, tabBarStyle:{display:'none'}}} />
            <Tab.Screen name='dash3' component={CDashboard3} options={{headerShown:false, tabBarStyle:{display:'none'}}} />
            <Tab.Screen name='dash4' component={CDashboard4} options={{headerShown:false, tabBarStyle:{display:'none'}}} />
        </Tab.Navigator>
    );
}