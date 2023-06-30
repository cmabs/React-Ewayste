import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Layout3 from './tab/route3';
import Map from './tab/mapPage';
import Message from './tab/messagePage';
import Profile from './tab/profilePage';

const Tab = createBottomTabNavigator();

export default function Layout2() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === 'home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === 'map') {
                        iconName = focused ? 'map' : 'map-outline'
                    } else if (rn === 'message') {
                        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
                    } else if (rn === 'profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    height: 60,
                    backgroundColor: 'rgb(179,229,94)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    top: 35,
                    position: 'absolute',
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: 'rgb(81,175,91)',
            })}
        >
            <Tab.Screen name='home' component={Layout3} options={{headerShown: false}} />
            <Tab.Screen name='map' component={Map} options={{headerShown: false}} />
            <Tab.Screen name='message' component={Message} options={{headerShown:false}} />
            <Tab.Screen name='profile' component={Profile} options={{headerShown:false}} />
        </Tab.Navigator>
    );
}