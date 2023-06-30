import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Login({navigation}) {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.container}>
                <View style={styles.containerFrm}>
                    <Text style={styles.title}>LOG IN ACCOUNT</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username / Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                <View  style={styles.divide}>
                    <View style={styles.divideLine} />
                    <Text style={styles.divLineTxt}>or log in with</Text>
                </View>
                <View style={styles.containerBtn}>
                    <View style={styles.button3}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={styles.buttonTxt3}>
                                <Text style={styles.googleBlue}>G</Text>
                                <Text style={styles.googleRed}>O</Text>
                                <Text style={styles.googleYellow}>O</Text>
                                <Text style={styles.googleBlue}>G</Text>
                                <Text style={styles.googleGreen}>L</Text>
                                <Text style={styles.googleRed}>E</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button1}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Route2'); }}>
                            <Text style={styles.buttonTxt1}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Don't have an account yet?</Text>
                    <View style={styles.button2}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('UserRegistration') }}>
                            <Text style={styles.buttonTxt2}>
                                Create an Account
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
        top: 290,
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFrm: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 215,
    },
    title: {
        fontWeight: "900",
        fontSize: 30,
        bottom: 25,
        color: 'rgba(16, 139, 0, 1)',
    },
    input: {
        height: 40,
        width: 270,
        paddingVertical: 0,
        paddingLeft: 10,
        backgroundColor: 'rgb(189,227,124)',
        borderRadius: 10,
        marginVertical: 7,
        color: 'rgba(45, 105, 35, 1)',
    },
    divide: {
        width: '100%',
        top: 255,
        alignItems: 'center',
    },
    divideLine: {
        width: '80%',
        height: 0,
        borderTopWidth: 1,
        zIndex: -50,
        borderColor: 'rgba(16, 139, 0, 1)',
        overflow:'visible',
    },
    divLineTxt: {
        top: -11,
        backgroundColor: 'rgb(246, 242, 239)',
        width: 100,
        textAlign: 'center',
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
        top: -10,
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
    button3: {
        top: -30,
        width: 145,
        height: 38,
        backgroundColor: 'rgba(203, 203, 203, 1)',
        borderRadius: 25,
        borderWidth: 2,
        borderBottomWidth: 1.62,
        borderTopColor: 'rgb(228,65,52)',
        borderBottomColor: 'rgb(50,163,80)',
        borderLeftColor: 'rgb(242,182,5)',
        borderRightColor: 'rgb(64,130,237)',
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
    buttonTxt3: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: '900',
        flexDirection: 'row',
    },
    googleBlue: {
        color: 'rgb(64,130,237)',
    },
    googleRed: {
        color: 'rgb(228,65,52)',
    },
    googleYellow: {
        color: 'rgb(242,182,5)',
    },
    googleGreen: {
        color: 'rgb(50,163,80)',
    },
});