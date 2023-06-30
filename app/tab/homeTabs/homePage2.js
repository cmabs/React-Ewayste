import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <View style={styles.containerContent}>
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

export default function Dashboard2({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <SafeAreaView style={styles.container}>
                <View style={styles.header1}>
                    <View style={styles.header2}>
                    </View>
                </View>
                <View style={styles.header3}>
                    {HeaderContent()}
                </View>
                <SafeAreaView style={styles.body}>
                    <View style={styles.navBar1}>
                        <View style={styles.navButton}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('dash1');}}>
                                <View style={styles.navButtonFront1}>
                                    <Ionicons name='bar-chart-outline' style={styles.buttonIcon} />
                                    <Text style={styles.iconLabel}>analytics</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navButton}>
                            <View style={styles.navButtonFront2}>
                                <Ionicons name='newspaper' style={styles.buttonIcon} />
                                <Text style={styles.iconLabel}>feed</Text>
                            </View>
                        </View>
                        <View style={styles.navButton}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('dash3');}}>
                                <View style={styles.navButtonFront1}>
                                    <Ionicons name='calendar-outline' style={styles.buttonIcon} />
                                    <Text style={styles.iconLabel}>schedule</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerPageName}>
                        <Text style={styles.pageName}>NEWS FEED</Text>
                    </View>
                    {BodyContent()}
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(246, 242, 239)',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        paddingHorizontal: 10,
    },
    bodyTxtAln1: {
        textAlign: 'justify',
    },
    navBar1: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        width: 65,
        height: 55,
        backgroundColor: 'rgba(241, 222, 40, 1)',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
    },
    navButtonFront1: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(242, 190, 45)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButtonFront2: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        color: '#ffffff',
        fontSize: 33,
        top: -6,
    },
    iconLabel: {
        position: 'absolute',
        color: '#ffffff',
        top: 35,
        fontSize: 12,
    },
    containerPageName: {
        alignItems: 'center',
        top: 15,
    },
    pageName: {
        fontSize: 23,
        fontWeight: 700,
        color: 'rgba(113, 112, 108, 1)',
        marginBottom: 10,
    },






    
    containerContent: {
        alignItems: 'center',
        top: 15,
    },
    contentGap: {
        marginBottom: 10,
    },
    contentButton: {
        width: 320,
        backgroundColor: 'rgba(203, 203, 203, 1)',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
    },
    contentButtonFront: {
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(113, 112, 108, 1)',
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