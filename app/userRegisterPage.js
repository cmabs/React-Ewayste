import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import CheckBox from "../components/CheckBox";

export default function Registration1({navigation}) {
    const [agree, setAgree] = useState(false);
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.container}>
                <View style={styles.containerFrm}>
                    <Text style={styles.title}>CREATE ACCOUNT</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
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
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Route2'); }}>
                            <Text style={styles.buttonTxt1}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button2}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={styles.buttonTxt2}>
                                Sign in with Google
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 550,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(246, 242, 239)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerBtn: {
        top: 210,
        gap: 10,
    },
    containerFrm: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 130,
    },
    containerChkbx: {
        flexDirection: "row",
        top: 170,
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