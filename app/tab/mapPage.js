import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SideBar from '../../components/SideNav';

export default function Map({ navigation }) {
    const [openSideBar, setOpenSideBar] = React.useState();

    function SideNavigation(navigation) {
        return (
            <>
                <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 99}}>
                    <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 150 }} onPress={() => {setOpenSideBar()}}>
                        <Ionicons name='arrow-back' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
                    </TouchableOpacity>
                    {SideBar(navigation)}
                    <TouchableOpacity style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0)', zIndex: -1}} onPress={() => {setOpenSideBar()}} />
                </View>
            </>
        );
    }

    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideNavigation(navigation))}}>
                <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(70,149,78)' }} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99, height: 60, width: 60, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 0.5, borderColor: 'rgb(0,0,0)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add-circle' style={{ fontSize: 60, color: 'rgb(255,203,60)', top: -2.3, right: -1.2 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', right: 31, bottom: 140, zIndex: 99, height: 75, width: 40, borderRadius: 10, backgroundColor: 'rgb(200,200,200)', borderWidth: 0.7, borderColor: 'rgb(0,0,0)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5} style={{ width: '100%', height: '50%' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.6 }}>
                        <Ionicons name='add' style={{fontSize: 25}} ></Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={{ width: '100%', height: '50%' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderTopWidth: 0.6 }}>
                        <Ionicons name='remove' style={{fontSize: 25}} ></Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', left: 70, top: 34, zIndex: 99 }} >
                <View style={{height: 36, width: 290, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10, borderWidth: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8}}>
                    <Ionicons name='search' style={{ fontSize: 27, color: 'rgb(180,180,180)' }} />
                </View>
            </TouchableOpacity>
            {openSideBar}
            <View style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('../../assets/SampleMap2.png')}
                    style={{
                        position: 'absolute',
                        resizeMode: 'stretch',
                        width: '100%',
                        height: '100%',
                        opacity: 1,
                        zIndex: -98,
                    }}
                />
            </View>
        </>
    );
}