import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Layout5 from './tab/route5';
import Map from './tab/mapPage';
import FriendsList from './tab/friendsPage';
import Message from './tab/messagePage';
import Profile from './tab/profilePage';

const Tab = createBottomTabNavigator();

export default function Layout6() {
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
                    } else if (rn === 'friends') {
                        iconName = focused ? 'people' : 'people-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    backgroundColor: 'rgb(179,229,94)',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: -5,
                    overflow: 'hidden'
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    top: 35,
                    position: 'absolute',
                },
                tabBarIconStyle: {
                    top: -6,
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: 'rgb(81,175,91)',
                tabBarActiveBackgroundColor: 'rgba(126, 185, 73, 1)',
            })}
        >
            <Tab.Screen name='home' component={Layout5} options={{headerShown: false}} />
            <Tab.Screen name='map' component={Map} options={{headerShown: false}} />
            <Tab.Screen name='friends' component={FriendsList} options={{headerShown: false}} />
            <Tab.Screen name='message' component={Message} options={{ headerShown: false }} />
            <Tab.Screen name='profile' component={Profile} options={{headerShown:false}} />
        </Tab.Navigator>
    );
}