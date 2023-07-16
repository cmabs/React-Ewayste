import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ReportCol({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

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
            <View>
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

    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }}>
                <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }} onPress={() => {navigation.navigate('notification')}}>
                <Ionicons name='notifications' style={{ fontSize: 35, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99 }}>
                <Ionicons name='add-circle' style={{ fontSize: 70, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SafeAreaView style={styles.container}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', paddingTop: 14}}>
                        <Text style={{ fontSize: 25, fontWeight: 900, color: 'rgb(81,175,91)' }}>REPORTS</Text>
                    </View>
                    <Text style={{position: 'absolute', right: 20, top: 80}}>
                        <Text style={{fontWeight: 600}}>Wednesday</Text>, April 19, 2023 <Ionicons name='caret-down-circle-outline' style={{fontSize: 20}} />
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{fontSize: 20, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 5}}>Banilad, Cebu City</Text>
                        <View style={{width: 350, backgroundColor: 'rgb(231, 247, 233)', borderRadius: 10, overflow: 'hidden', marginBottom: 20}}>
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
    contentGap: {
        marginBottom: 10,
    },
    contentButton: {
        width: 350,
        backgroundColor: 'rgb(230, 230, 230)',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "rgb(0,0,0)",
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
        backgroundColor: 'rgb(231, 247, 233)',
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
});