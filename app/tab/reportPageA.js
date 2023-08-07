import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ReportAut({navigation}) {
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

    function BodyContent() {
        let temp = [];
        for (let i = 0; i < 10; i++) {
            temp.push(
                <View style={[styles.contentButton, styles.contentGap]}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <View style={styles.contentButtonFront}>
                            <View style={{width: '93%', flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 15}}>
                                <View style={styles.containerPfp}>
                                    <Ionicons name='person-outline' style={styles.placeholderPfp} />
                                </View>
                                <Text style={{fontSize: 16, fontWeight: 500, color: 'rgba(113, 112, 108, 1)'}}>Username</Text>
                            </View>
                            <SafeAreaView style={{width: '100%', marginVertical: 10, paddingHorizontal: 22, paddingBottom: 5, borderBottomWidth: 1, borderColor: 'rgba(190, 190, 190, 1)'}}>
                                <Text style={{fontSize: 13, marginBottom: 5,}}>Banilad, Cebu City</Text>
                                <View style={{ width: '100%', height: 200, backgroundColor: '#D6D6D8', marginVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='images-outline' style={{fontSize: 100, color: 'white'}} />
                                </View>
                            </SafeAreaView>
                            <View style={{width: '90%', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 10}}>
                                <Ionicons name='heart-outline' style={{ fontSize: 25 }} />
                                <Ionicons name='chatbubble-outline' style={{ fontSize: 25 }} />
                                <Ionicons name='share-outline' style={{fontSize: 25}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
        
        <ul>
            {temp.map(item =>
                <li key="{item}">{item}</li>
            )}
        </ul>

        return (
            <View style={{gap: 10}}>
                {temp}
            </View>
        );
    }

    function ViewAllContent() {
        let temp1 = [];
        for (let i = 0; i < 10; i++) {
            temp1.push(
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#D6D6D8', marginVertical: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Ionicons name='images-outline' style={{fontSize: 40, color: 'white'}} />
                    </View>
                </TouchableOpacity>
            );
        }
        
        <ul>
            {temp1.map(item =>
                <li key="{item}">{item}</li>
            )}
        </ul>

        return (
            <View style={{flexDirection: 'row', marginHorizontal: 10, gap: 10}}>
                {temp1}
            </View>
        );
    }

    function HeaderContent() {
        return (
            <>
                <Text style={{fontSize: 18, fontWeight: 700, color:'rgb(55,55,55)'}}>BANILAD, CEBU CITY</Text>
                <View style={{flexDirection: 'row', gap: 7, top: 5}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontWeight: 500, color:'rgb(55,55,55)', marginBottom: 5}}>REPORTS TODAY</Text>
                        <View style={styles.headerCntr}>
                            <Text style={{fontSize: 40, fontWeight: 700, color:'rgb(55,55,55)'}}>12</Text>
                            <Text style={{fontSize: 14, fontWeight: 700, color:'rgb(55,55,55)'}}>Garbages</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontWeight: 500, color:'rgb(55,55,55)', marginBottom: 5}}>TOTAL REPORT</Text>
                        <View style={styles.headerCntr}>
                            <Text style={{fontSize: 40, fontWeight: 700, color:'rgb(55,55,55)'}}>38</Text>
                            <Text style={{fontSize: 14, fontWeight: 700, color:'rgb(55,55,55)'}}>Garbages</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            {/*<View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99, height: 60, width: 60, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'rgb(81,175,91)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add-circle' style={{ fontSize: 60, color: 'rgb(81,175,91)', top: -3, right: -0.9 }} />
                    </View>
                </TouchableOpacity>
            </View>*/}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideBar(navigation))}}>
                        <Ionicons name='menu' style={{ fontSize: 40, color: '#ffffff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }} onPress={() => {navigation.navigate('notification')}}>
                        <Ionicons name='notifications' style={{ fontSize: 35, color: '#ffffff' }} />
                    </TouchableOpacity>
                    <View style={styles.header1}>
                        <View style={styles.header2}>
                            <Image
                                source={require('../../assets/NatureVector.jpg')}
                                style={{
                                    resizeMode: 'stretch',
                                    width: '100%',
                                    height: '150%',
                                    opacity: 0.5,
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.header3}>
                        {HeaderContent()}
                    </View>
                    <SafeAreaView style={styles.body}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 23, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 10}}>REPORTS</Text>
                        </View>
                        <View>
                            <View style={{width: 315, backgroundColor: '#ffffff', borderRadius: 10, overflow: 'hidden', marginBottom: 20}}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <Text style={{ left: 10, marginTop: 15, fontWeight: 700 }}>REPORTS TODAY</Text>
                                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 15, marginTop: 15 }}>
                                        <Text style={{textDecorationLine: 'underline'}}>
                                            View all
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView horizontal={true}>
                                    {ViewAllContent()}
                                </ScrollView>
                            </View>
                            {BodyContent ()}
                        </View>
                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>
            {openSideBar}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(246, 242, 239)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 60,
    },
    header1: {
        width: '100%',
        height: 252,
        backgroundColor: 'rgb(220, 130, 47)',
        zIndex: -50,
    },
    header2: {
        width: '100%',
        height: '90%',
        backgroundColor: 'rgb(134, 202, 81)',
        overflow: 'hidden',
        alignItems: 'center',
    },
    header3: {
        position: 'absolute',
        width: 310,
        height: 210,
        top: 75,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        elevation: 6,
        zIndex: 50,
        alignItems: 'center',
        paddingTop: 20,
    },
    body: {
        position: 'relative',
        width: 330,
        backgroundColor: 'rgb(228,237,229)',
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerCntr: {
        width: 137,
        height: 90,
        backgroundColor: 'rgb(255,248,172)',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentButton: {
        width: 315,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    contentButtonFront: {
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(113, 112, 108, 1)',
    },
    containerPfp: {
        width: 35,
        height: 35,
        backgroundColor: '#D6D6D8',
        borderRadius: 55,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderPfp: {
        fontSize: 25,
        color: 'rgba(113, 112, 108, 1)',
    },
})