import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Landing({ navigation }) {
    const [temp, setTemp] = useState();

    function SignIn(navigation) {
        return (
            <>
                <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 99, backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                    <View style={{position: 'absolute',width: '100%', alignItems: 'flex-start', top: 30, left: 20}}>
                        <TouchableOpacity onPress={() => { setTemp(); }}>
                            <Ionicons name='arrow-back' style={{fontSize: 40, color: 'rgb(179,229,94)'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ gap: 20 }}>
                        <View style={{width: 280, height: 200, backgroundColor: 'rgba(203, 203, 203, 1)', borderRadius: 10, overflow: 'hidden',}}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => { setTemp(); navigation.navigate('registerUser'); }}>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>User</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 280, height: 200, backgroundColor: 'rgba(203, 203, 203, 1)', borderRadius: 10, overflow: 'hidden',}}>
                            <TouchableOpacity style={{ width: '100%', height: '100%' }} activeOpacity={0.5} onPress={() => { setTemp(), navigation.navigate('registerAuthority'); }}>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>Authorities</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 280, height: 200, backgroundColor: 'rgba(203, 203, 203, 1)', borderRadius: 10, overflow: 'hidden',}}>
                            <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => { setTemp(); navigation.navigate('registerCollector'); }}>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>Collector</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/E-Wayste-logo.png')}
            />
            <Text style={styles.title}>E-WAYSTE</Text>
            <View style={styles.containerBtn}>
                <View style={styles.button}>
                    <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => { setTemp(SignIn(navigation)); }}>
                        <Text style={styles.buttonTxt}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => { navigation.navigate('login'); }}>
                        <Text style={styles.buttonTxt}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('../../../assets/RoadMap2.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'stretch',
                    width: '180%',
                    height: '130%',
                    opacity: 0.1,
                    zIndex: -98,
                }}
            />
            {temp}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(179,229,94)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBtn: {
        top: 130,
        gap: 15,
    },
    logo: {
        width: 257,
        height: 230,
        top: -100
    },
    title: {
        fontWeight: '900',
        fontSize: 40,
        letterSpacing: -2,
        color: 'rgb(0,123,0)',
    },
    button: {
        width: 257,
        height: 45,
        backgroundColor: 'rgba(203, 203, 203, 1)',
        borderRadius: 15,
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
    buttonTxt: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'rgb(0,123,0)',
        fontWeight: '900',
    },
});