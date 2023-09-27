import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SideBar from '../../components/SideNav';

export default function NewsfeedAut({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [openSideBar, setOpenSideBar] = React.useState();
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

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
                                <Text style={{fontSize: 13, marginBottom: 5,}}>Lorem ipsum dolor sit amet, consectetur is adipiscing elit. Fusce ex metus, placerat quis tortor quis, feugiat dapibus sem. Donec volutpat felis mauris, et imperdiet massa convallis et.</Text>
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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideNavigation(navigation))}}>
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
                            <Text style={{fontSize: 23, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 10}}>NEWS FEED</Text>
                        </View>
                        <View style={{width: 315, backgroundColor: 'rgb(230, 230, 230)', borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: 'rgb(16, 139, 0)', marginBottom: 20}}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{backgroundColor: '#ffffff', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, alignItems: 'center'}}>
                                    <View style={[styles.containerPfp, {width: 45, height: 45}]}>
                                        <Ionicons name='person-outline' style={[styles.placeholderPfp, {fontSize: 35}]} />
                                    </View>
                                    <Text style={{left: 15}}>
                                        What's on your mind?
                                    </Text>
                                    <View style={{position: 'absolute', right:15, width: 70, height: 35, backgroundColor: 'rgb(45, 105, 35)', borderRadius: 20, overflow: 'hidden'}}>
                                        <TouchableOpacity activeOpacity={0.5}>
                                            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(81,175,91)'}}>
                                                <Text style={{fontWeight: 700, color: '#ffffff'}}>POST</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 10, flexDirection: 'row', gap: 10, marginBottom: 15}}>
                            <View style={{width: 70, height: 35, backgroundColor: 'rgb(179, 229, 94)', borderRadius: 20, overflow: 'hidden', shadowColor: "#000", shadowOffset: {width: 0, height: 3,}, shadowOpacity: 0.27, elevation: 3}}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}>
                                        <Text style={{fontWeight: 700, fontSize: 15, color: 'rgb(113, 112, 108)'}}>All</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: 90, height: 35, backgroundColor: 'rgb(179, 229, 94)', borderRadius: 20, overflow: 'hidden', shadowColor: "#000", shadowOffset: {width: 0, height: 3,}, shadowOpacity: 0.27, elevation: 3}}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}>
                                        <Text style={{fontWeight: 700, fontSize: 15, color: 'rgb(113, 112, 108)'}}>Reports</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: 90, height: 35, backgroundColor: 'rgb(179, 229, 94)', borderRadius: 20, overflow: 'hidden', shadowColor: "#000", shadowOffset: {width: 0, height: 3,}, shadowOpacity: 0.27, elevation: 3}}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}>
                                        <Text style={{fontWeight: 700, fontSize: 15, color: 'rgb(113, 112, 108)'}}>Events</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {BodyContent()}
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