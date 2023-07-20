import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list';

export default function AddSched({navigation}) {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [hourStart, setHourStart] = useState();
    const [minStart, setMinStart] = useState();
    const [hourEnd, setHourEnd] = useState();
    const [minEnd, setMinEnd] = useState();
    const [ampmStart, setAmpmStart] = useState();
    const [ampmEnd, setAmpmEnd] = useState();

    const Month = [
        { key: "January", value: "January" },
        { key: "February", value: "February" },
        { key: "March", value: "March" },
        { key: "April", value: "April" },
        { key: "May", value: "May" },
        { key: "June", value: "June" },
        { key: "July", value: "July" },
        { key: "August", value: "August" },
        { key: "September", value: "September" },
        { key: "October", value: "October" },
        { key: "November", value: "November" },
        { key: "December", value: "December" },
    ];

    const Year = [];
    let ctr = 0;
    for (let i = 2000; i <= 2090; i++) {
        Year[ctr] = { key: i, value: i };
        ctr++;
    }

    const Hour = [];
    let ctr2 = 0;
    for (let i = 1; i <= 12; i++) {
        Hour[ctr2] = { key: i, value: i };
        ctr2++;
    }

    const Min = [];
    let ctr3 = 0;
    for (let i = 0; i <= 9; i++) {
        Min[ctr3] = { key: ('0' + i), value: ('0' + i) };
        ctr3++;
    }
    for (let i = 10; i <= 59; i++) {
        Min[ctr3] = { key: i, value: i };
        ctr3++;
    }

    const AmpmTemp = [
        { key: "AM", value: "AM" },
        { key: "PM", value: "PM" },
    ];

    return (
        <>
            <View style={{ position: "absolute", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "center", zIndex: 10, backgroundColor: "rgba(0, 0, 0, 0.85)", }}>
                <View style={{ position: "absolute", width: "100%", alignItems: "flex-start", top: 30, left: 20, zIndex: 10, }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('mainSched'); }}>
                        <Ionicons name="arrow-back" style={{ fontSize: 40, color: "rgb(179,229,94)" }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center', paddingTop: 90, }}>
                        <Text style={{marginBottom: 40, fontSize: 25, fontWeight: 900, color: 'rgba(113, 112, 108, 1)',}}>SCHEDULE AN EVENT</Text>
                        <View style={{width: '100%', paddingHorizontal: 25}}>
                            <Text style={{fontSize: 18, marginBottom: 5}}>
                                Subject
                            </Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '100%',
                                    backgroundColor: 'rgba(234, 245, 215, 1)',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: "rgb(189,227,124)",
                                    color: "rgba(45, 105, 35, 1)",
                                    paddingLeft: 15,
                                    fontSize: 18,
                                }}
                            />
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 25, marginTop: 5}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>
                                Location
                            </Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '100%',
                                    backgroundColor: 'rgba(234, 245, 215, 1)',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: "rgb(189,227,124)",
                                    color: "rgba(45, 105, 35, 1)",
                                    paddingLeft: 15,
                                }}
                            />
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 25, flexDirection: 'row', gap: 18, marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16}}>Event Date:</Text>
                            <Text>{month}</Text>
                            <Text>/</Text>
                            <Text>1</Text>
                            <Text>/</Text>
                            <Text>{year}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <SelectList
                                setSelected={(e) => { setYear(e); }}
                                data={Year}
                                placeholder="Select Year"
                                boxStyles={{
                                    width: 120,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderRightWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 80,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                            <SelectList
                                setSelected={(e) => { setMonth(e); }}
                                data={Month}
                                placeholder="Select Month"
                                boxStyles={{
                                    width: 130,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderLeftWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 115,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 25, flexDirection: 'row', gap: 18, marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16}}>Event Time:</Text>
                            <Text>{hourStart} : {minStart} {ampmStart}</Text>
                            <Text>-</Text>
                            <Text>{hourEnd} : {minEnd} {ampmEnd}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <SelectList
                                setSelected={(e) => { setHourStart(e); }}
                                data={Hour}
                                defaultOption={{ key: 1, value: '1' }}
                                boxStyles={{
                                    width: 60,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderRightWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 60,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                            <SelectList
                                setSelected={(e) => { setMinStart(e); }}
                                data={Min}
                                defaultOption={{ key: '00', value: '00' }}
                                boxStyles={{
                                    width: 60,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 60,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                            <SelectList
                                setSelected={(e) => { setAmpmStart(e); }}
                                data={AmpmTemp}
                                defaultOption={{ key: 'AM', value: 'AM' }}
                                boxStyles={{
                                    width: 70,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderLeftWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 70,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <SelectList
                                setSelected={(e) => { setHourEnd(e); }}
                                data={Hour}
                                defaultOption={{ key: 1, value: '1' }}
                                boxStyles={{
                                    width: 60,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderRightWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 60,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                            <SelectList
                                setSelected={(e) => { setMinEnd(e); }}
                                data={Min}
                                defaultOption={{ key: '00', value: '00' }}
                                boxStyles={{
                                    width: 60,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 60,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                            <SelectList
                                setSelected={(e) => { setAmpmEnd(e); }}
                                data={AmpmTemp}
                                defaultOption={{ key: 'AM', value: 'AM' }}
                                boxStyles={{
                                    width: 70,
                                    backgroundColor: "#ffffff",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderLeftWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 70,
                                    backgroundColor: "rgb(189,227,124)",
                                    top: -10,
                                    marginBottom: -10,
                                    borderRadius: 0,
                                    zIndex: -1,
                                    borderWidth: 0,
                                    alignSelf: 'center',
                                }}
                                search={false}
                            />
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 25, marginTop: 25}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>
                                Description
                            </Text>
                        </View>
                        <View style={{width: '100%', marginTop: 30, marginBottom: 90}}>
                            <Button title='ADD SCHEDULE' />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
}