import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SideBar from './SideNav';

export default function OpenSideBar(navigation, openNav) {
    const [open, setOpen] = React.useState();
    if(openNav === 'open') {

        React.useEffect=(() => {
            SideBar(navigation)
        })
        return (
            <SideBar />
        );
    }
}