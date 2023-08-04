import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import CheckBox from '../../../components/CheckBox';
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Registration3({ navigation }) {
    const [agree, setAgree] = useState(false);
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.container}>
                <View style={{position: 'absolute',width: '100%', alignItems: 'flex-start', top: 30, left: 20}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('register')}}>
                        <Ionicons name='arrow-back' style={{fontSize: 40, color: 'rgba(16, 139, 0, 1)'}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerFrm}>
                    <Text style={styles.title}>CREATE ACCOUNT</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Province"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Municipality"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Barangay"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contact Number"
                    />
                </View>
                <View style={styles.containerChkbx}>
                    <CheckBox
                        onPress={() => setAgree(!agree)}
                        title="I agree to the Terms and Conditions and Privacy Policy"
                        isChecked={agree}
                    />
                </View>
                <View style={styles.containerBtn}>
                    <View style={styles.button1}>
                        <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => { navigation.navigate('authorityRoute'); }}>
                            <Text style={styles.buttonTxt1}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button2}>
                        <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5}>
                            <Text style={styles.buttonTxt2}>
                                Sign in with Google
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5, alignItems: 'center', marginVertical: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 500}}>Already have an account?</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('login')}}>
                            <Text style={{color: 'rgb(0,123,0)', fontSize: 16, fontWeight: 900}}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerBtn: {
        top: 230,
        gap: 10,
    },
    containerFrm: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 150,
    },
    containerChkbx: {
        flexDirection: "row",
        top: 190,
        left: -12,
        width: 260,
    },
    title: {
        fontWeight: "900",
        fontSize: 30,
        bottom: 30,
        color: 'rgba(16, 139, 0, 1)',
    },
    input: {
        height: 40,
        width: 270,
        paddingVertical: 0,
        paddingLeft: 10,
        backgroundColor: 'rgb(189,227,124)',
        borderRadius: 10,
        marginVertical: 5,
        color: 'rgba(45, 105, 35, 1)',
    },
    button1: {
        width: 220,
        height: 45,
        backgroundColor: 'rgba(45, 105, 35, 1)',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgb(81,175,91)',
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
    buttonTxt1: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(81,175,91)',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: '#ffffff',
        fontWeight: '900',
    },
    button2: {
        width: 220,
        height: 45,
        backgroundColor: 'rgba(203, 203, 203, 1)',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgb(81,175,91)',
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
    buttonTxt2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'rgb(81,175,91)',
        fontWeight: '900',
    },
});