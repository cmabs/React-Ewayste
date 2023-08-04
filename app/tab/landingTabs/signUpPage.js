import { useState } from 'react';
import { StyleSheet, ScrollView, Text, SafeAreaView, Image, TouchableOpacity, View, Button, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';

export default function SignUp({ navigation }) {
    const [accountType, setAccountType] = useState();

    const Type = [
        { key: "Residents / General Users", value: "Residents / General Users" },
        { key: "LGU / Waste Management Head", value: "LGU / Waste Management Head" },
        { key: "Garbage Collector", value: "Garbage Collector" },
    ];

    function Redirect() {
        if (accountType === 'Residents / General Users') {
            navigation.navigate('registerUser');
        }
        if (accountType === 'LGU / Waste Management Head') {
            navigation.navigate('registerAuthority');
        }
        if (accountType === 'Garbage Collector') {
            navigation.navigate('registerCollector');
        }
    }

    return (
        <>
            <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 99, backgroundColor: '#ffffff' }}>
                <View style={{position: 'absolute',width: '100%', alignItems: 'flex-start', top: 30, left: 20}}>
                    <TouchableOpacity onPress={() => { navigation.navigate('landing') }}>
                        <Ionicons name='arrow-back' style={{fontSize: 40, color: 'rgba(16, 139, 0, 1)'}} />
                    </TouchableOpacity>
                </View>
                <Image
                    style={{
                        width: 167,
                        height: 150,
                        top: -250,
                    }}
                    source={require('../../../assets/E-Wayste-logo.png')}
                />
                <View style={{position: 'absolute', backgroundColor: 'rgb(189,227,124)', bottom: 0, width: '100%', height: 530, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
                    <ScrollView style={{height: '100%', width: '100%'}}>
                        <View style={{ gap: 10, width: '100%', alignItems: 'center' }}>
                            <Text style={styles.title}>CREATE ACCOUNT</Text>
                            <SelectList
                                setSelected={(e) => { setAccountType(e); }}
                                data={Type}
                                defaultOption={{ key: "Residents / General Users", value: "Residents / General Users" }}
                                placeholder="Select User Account Type"
                                boxStyles={{
                                    width: 270,
                                    backgroundColor: "#ffffff",
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 270,
                                    backgroundColor: "rgb(231,247,233)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
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
                            <View style={styles.button}>
                                <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5} onPress={() => {Redirect()}}>
                                    <Text style={styles.buttonTxt}>Next</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center', marginVertical: 10}}>
                                <Text style={{fontSize: 14, fontWeight: 500}}>Already have an account?</Text>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('login')}}>
                                    <Text style={{color: 'rgb(0,123,0)', fontSize: 16, fontWeight: 900}}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 157,
        height: 45,
        backgroundColor: 'rgb(0,123,0)',
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
        marginTop: 25,
    },
    buttonTxt: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(81,175,91)',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 16,
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginVertical: 25,
        color: 'rgb(0, 100, 0)',
    },
    input: {
        height: 40,
        width: 270,
        paddingVertical: 0,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        color: 'rgba(45, 105, 35, 1)',
    },
});