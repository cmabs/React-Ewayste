import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

function HeaderContent() {
    return (
        <>
            <Text style={{fontSize: 18, fontWeight: 700, color:'rgb(55,55,55)'}}>COLLECTOR REPORT</Text>
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

export default function CDashboard3({navigation}) {
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
                    <View style={styles.navBar1}>
                        <View style={styles.navButton}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => {navigation.navigate('dash1');}}>
                                <View style={styles.navButtonFront1}>
                                    <Ionicons name='bar-chart-outline' style={styles.buttonIcon} />
                                    <Text style={styles.iconLabel}>analytics</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navButton}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => {navigation.navigate('dash2');}}>
                                <View style={styles.navButtonFront1}>
                                    <Ionicons name='newspaper-outline' style={styles.buttonIcon} />
                                    <Text style={styles.iconLabel}>feed</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.uploadButton}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5}>
                                <View style={styles.uploadButtonFront}>
                                    <Ionicons name='add-circle-outline' style={styles.uploadButtonIcon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.navButton}>
                            <View style={styles.navButtonFront2}>
                                <Ionicons name='calendar' style={styles.buttonIcon2} />
                                <Text style={styles.iconLabel2}>schedule</Text>
                            </View>
                        </View>
                        <View style={styles.navButton}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => {navigation.navigate('dash4')}}>
                                <View style={styles.navButtonFront1}>
                                    <Ionicons name='notifications-outline' style={styles.buttonIcon} />
                                    <Text style={styles.iconLabel}>alerts</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerPageName}>
                        <Text style={styles.pageName}>SCHEDULE</Text>
                    </View>
                    <Calendar style={{top: 15, marginBottom: 15}} />
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
        paddingHorizontal: 10,
    },
    bodyTxtAln1: {
        textAlign: 'justify',
    },
    navBar1: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        width: 45,
        height: 45,
        backgroundColor: 'rgb(126,185,73)',
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
        backgroundColor: 'rgb(179,229,94)',
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
        color: 'rgb(85,177,91)',
        fontSize: 28,
        top: -4,
    },
    iconLabel: {
        position: 'absolute',
        color: 'rgb(85,177,91)',
        top: 30,
        fontSize: 10,
    },
    buttonIcon2: {
        color: '#ffffff',
        fontSize: 28,
        top: -4,
    },
    iconLabel2: {
        position: 'absolute',
        color: '#ffffff',
        top: 30,
        fontSize: 10,
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
    uploadButton: {
        width: 65,
        height: 65,
        backgroundColor: 'rgba(241, 222, 40, 1)',
        borderRadius: 100,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadButtonFront: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(242, 190, 45)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadButtonIcon: {
        left: 1.5,
        color: '#ffffff',
        fontSize: 50,
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