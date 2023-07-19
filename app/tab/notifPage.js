import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Notifications({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [openSideBar, setOpenSideBar] = React.useState();
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    function SideBar(navigation) {
        return (
            <>
                <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 99 }}>
                    <View style={{ width: 280, height: '100%', backgroundColor: '#ffffff', paddingBottom: 60, alignItems: 'center' }}>
                        <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar()}}>
                            <Ionicons name='arrow-back' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', alignItems: 'center', gap: 10, marginTop: 60 }}>
                            <Image
                                source={require('../../assets/E-Wayste-logo.png')}
                                style={{width: 180, height: 161, marginBottom: 10}}
                            />
                            <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => { setOpenSideBar(); navigation.navigate('profile') }}>
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
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { setOpenSideBar(); navigation.navigate('login') }}>
                                <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                                    <Text>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0)', zIndex: -1}} onPress={() => {setOpenSideBar()}} />
                </View>
            </>
        );
    }

    function NotifToday() {
        return (
            <>
                <View style={{gap: 15, marginBottom: 20}}>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='checkmark' style={{fontSize: 70, color: 'rgb(81,175,91)'}} />
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 700}}>Collected!</Text>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 5}}>Your garbage report is already collected</Text>
                            <Text style={{fontSize: 11}}>10:24 am</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='trash' style={{fontSize: 50, color: 'rgb(81,175,91)'}} />
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 700}}>Garbage Collection</Text>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 5}}>Garbage collection is now ongoing</Text>
                            <Text style={{fontSize: 11}}>09:00 am</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='trash' style={{fontSize: 50, color: 'rgb(81,175,91)'}} />
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 700}}>REMINDER</Text>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 5}}>Expect collection of garbage in your erea</Text>
                            <Text style={{fontSize: 11}}>08:00 am</Text>
                        </View>
                        <View style={{position: 'absolute', right: 15, top: 12}}>
                            <Text style={{fontSize: 12, fontWeight: 700}}><Ionicons name='time-outline' style={{fontSize: 14, color: 'rgb(13,86,1)'}} /> 12:00 PM</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    function NotifYesterday() {
        return (
            <>
                <View style={{gap: 15, marginBottom: 20}}>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: 'rgb(81,175,91)', justifyContent: 'center', alignItems: 'center'}}>
                                <Ionicons name='person-outline' style={{ fontSize: 35, color: 'rgb(13,86,1)' }} />
                            </View>
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 17}}>Xannetz 101 commented on your post</Text>
                            <Text style={{fontSize: 11}}>08:54 pm</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: 'rgb(81,175,91)', justifyContent: 'center', alignItems: 'center'}}>
                                <Ionicons name='person-outline' style={{ fontSize: 35, color: 'rgb(13,86,1)' }} />
                            </View>
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 17}}>Maybs12 liked yout post</Text>
                            <Text style={{fontSize: 11}}>06:12 pm</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 15, overflow: 'hidden', flexDirection: 'row' }}>
                        <View style={{ height: '100%', width: 70, backgroundColor: 'rgb(189,228,124)', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: 'rgb(81,175,91)', justifyContent: 'center', alignItems: 'center'}}>
                                <Ionicons name='person-outline' style={{ fontSize: 35, color: 'rgb(13,86,1)' }} />
                            </View>
                        </View>
                        <View style={{marginLeft: 10, marginTop: 10}}>
                            <Text style={{fontSize: 12, fontWeight: 700, marginTop: 17}}>Brngy. Banilad commented on your post</Text>
                            <Text style={{fontSize: 11}}>04:03 pm</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideBar(navigation))}}>
                <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            {openSideBar}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', paddingTop: 14}}>
                        <Text style={{ fontSize: 25, fontWeight: 900, color: 'rgb(81,175,91)' }}>NOTIFICATIONS</Text>
                    </View>
                    <View style={{ marginTop: 50, width: 330 }}>
                        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, fontWeight: 700, color: 'rgb(13,86,1)', marginBottom: 5 }}>Today</Text>
                            <Text>
                                <Text style={{fontWeight: 600}}>Wednesday</Text>, April 19, 2023
                            </Text>
                        </View>
                        {NotifToday()}
                        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, fontWeight: 700, color: 'rgb(13,86,1)', marginBottom: 5 }}>Yesterday</Text>
                            <Text>
                                <Text style={{fontWeight: 600}}>Tuesday</Text>, April 18, 2023
                            </Text>
                        </View>
                        {NotifYesterday()}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 60,
        paddingTop: 20,
    },
});