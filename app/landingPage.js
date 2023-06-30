import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, View } from 'react-native';

export default function Landing({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/E-Wayste-logo.png')}
            />
            <Text style={styles.title}>E-WAYSTE</Text>
            <View style={styles.containerBtn}>
                <View style={styles.button}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('UserRegistration'); }}>
                        <Text style={styles.buttonTxt}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Login'); }}>
                        <Text style={styles.buttonTxt}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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