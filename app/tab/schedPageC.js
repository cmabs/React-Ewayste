import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

export default function ScheduleCol({ navigation }) {
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
                <View style={{ width: 330, marginTop: 20, gap: 10 }}>
                    <View style={{width: '100%', borderWidth: 0.5}} />
                    <Text style={{fontWeight: 800}}>Week 1</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>02</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>9:00 am</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>06</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>10:00 am</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 2</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>12</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>09:00 am</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 3</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>17</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>10:00 am</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 800 }}>Week 4</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(225,203,60)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>25</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(225,248,172)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Garbage Collection</Text>
                            <Text>09:00 am</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: 80, height: 80, borderRadius: 30, backgroundColor: 'rgb(134,231,237)', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40, fontWeight: 800}}>27</Text>
                        </View>
                        <View style={{position: 'absolute', width: 235, height: 80, borderRadius: 10, backgroundColor: 'rgb(171,247,221)', right: 0, justifyContent: 'center', paddingHorizontal: 15}}>
                            <Text style={{fontSize: 18, fontWeight: 800}}>Special Event</Text>
                            <Text>10:00 am</Text>
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

    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideBar(navigation))}}>
                <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }}  onPress={() => {navigation.navigate('notification')}}>
                <Ionicons name='notifications' style={{ fontSize: 35, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99, height: 60, width: 60, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'rgb(81,175,91)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add-circle' style={{ fontSize: 60, color: 'rgb(81,175,91)', top: -3, right: -0.9 }} />
                    </View>
                </TouchableOpacity>
            </View>
            {openSideBar}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', paddingTop: 14}}>
                        <Text style={{ fontSize: 25, fontWeight: 900, color: 'rgb(81,175,91)' }}>SCHEDULE</Text>
                    </View>
                    <Text style={{position: 'absolute', right: 20, top: 80}}>
                        <Text style={{fontWeight: 600}}>Wednesday</Text>, April 19, 2023 <Ionicons name='caret-down-circle-outline' style={{fontSize: 20}} />
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{fontSize: 20, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 5}}>Banilad, Cebu City</Text>
                        <Calendar style={{ width: 330, backgroundColor: 'rgb(236, 252, 238)', borderRadius: 10, borderWidth: 0.5, borderColor: 'rgb(16, 139, 0)', paddingBottom: 15 }}
                            markedDates={{
                                '2023-07-02': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-06': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-12': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-17': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-25': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-27': { selected: true, selectedColor: 'rgb(134, 231, 237)' }
                            }}
                        />
                    </View>
                    <View style={{width: 330, marginTop: 10, gap: 5}}>
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