import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SideBar(navigation) {
    return (
        <>
            <View style={{ width: 280, height: '100%', backgroundColor: '#ffffff', paddingBottom: 60, alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', gap: 10, marginTop: 60 }}>
                    <Image
                        source={require('../assets/E-Wayste-logo.png')}
                        style={{width: 180, height: 161, marginBottom: 10}}
                    />
                    <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('profile') }}>
                            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                                <Text>User Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                                <Text>Settings</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{position: 'absolute', width: '95%', height: 40, bottom: 80, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('login') }}>
                        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                            <Text>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}