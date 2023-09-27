import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

export default function ScheduleAut({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [openSideBar, setOpenSideBar] = React.useState();
    const [viewSched, setViewSched] = React.useState(ViewSchedButton());
    
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
                                source={require('../../../assets/E-Wayste-logo.png')}
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

    function ViewSchedButton() {
        return (
            <>
                <View style={{ width: 330, marginTop: 20, alignItems: 'center' }}>
                    <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { setViewSched(ViewSchedExtend()); }}>
                            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                                <Text>View all Events</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }

    function ViewSchedExtend() {
        return (
            <>
                <View style={{ width: 315, marginTop: 20, gap: 10 }}>
                    <View style={{width: '100%', borderWidth: 0.5}} />
                    <Text style={{fontWeight: 800}}>Week 1</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>02</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>9:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>06</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>10:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 2</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>12</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>09:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 3</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>17</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>10:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 4</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>25</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>09:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(134,231,237)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>27</Text>
                        </View>
                        <View style={{position: 'absolute', width: 225, height: 80, borderRadius: 10, backgroundColor: 'rgb(171,247,221)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Special Event</Text>
                            <Text>10:00 am</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}>
                                <Ionicons name='ellipsis-horizontal' style={{fontSize: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: 330, marginTop: 20, alignItems: 'center' }}>
                    <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { setViewSched(ViewSchedButton()); }}>
                            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}>
                                <Text>Show less</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
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
            <View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99, height: 60, width: 60, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'rgb(81,175,91)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('addSched'); }}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add-circle' style={{ fontSize: 60, color: 'rgb(81,175,91)', top: -3, right: -0.9 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }}>
                        <Ionicons name='menu' style={{ fontSize: 40, color: '#ffffff' }} onPress={() => {setOpenSideBar(SideBar(navigation))}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }}  onPress={() => {navigation.navigate('notification')}}>
                        <Ionicons name='notifications' style={{ fontSize: 35, color: '#ffffff' }} />
                    </TouchableOpacity>
                    <View style={styles.header1}>
                        <View style={styles.header2}>
                            <Image
                                source={require('../../../assets/NatureVector.jpg')}
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
                            <Text style={{fontSize: 23, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 10}}>SCHEDULE</Text>
                        </View>
                        <View>
                            <Calendar style={{ width: 315, borderRadius: 10, borderWidth: 0.5, borderColor: 'rgb(16, 139, 0)', paddingBottom: 15 }}
                                markedDates={{
                                    '2023-08-02': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                    '2023-08-06': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                    '2023-08-12': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                    '2023-08-17': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                    '2023-08-25': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                    '2023-08-27': { selected: true, selectedColor: 'rgb(134, 231, 237)' }
                                }}
                            />
                        </View>
                        <View style={{width: 315, marginTop: 10, gap: 5}}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <View style={{ width: 20, height: 20, backgroundColor: 'rgb(242, 190, 45)' }} />
                                <Text>Schedule for Collection</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <View style={{ width: 20, height: 20, backgroundColor: 'rgb(134, 231, 237)' }} />
                                <Text>Special Events</Text>
                            </View>
                        </View>
                        {viewSched}
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
})