import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list';

export default function AddSched({navigation}) {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [hourStart, setHourStart] = useState();
    const [minStart, setMinStart] = useState();
    const [hourEnd, setHourEnd] = useState();
    const [minEnd, setMinEnd] = useState();
    const [ampmStart, setAmpmStart] = useState();
    const [ampmEnd, setAmpmEnd] = useState();
    const [selectType, setSelectType] = useState();

    const Type = [
        { key: "Collection", value: "Collection" },
        { key: "Assignment", value: "Assignment" },
        { key: "Event", value: "Event" },
    ];

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

    const Day = [];
    let ctr4 = 0;
    if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        for (let i = 1; i <= 31; i++) {
            Day[ctr4] = { key: i, value: i };
            ctr4++;
        }
    }
    if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        for (let i = 1; i <= 30; i++) {
            Day[ctr4] = { key: i, value: i };
            ctr4++;
        }
    }
    if (month === 'February' && (Number(year) % 4 === 0)) {
        for (let i = 1; i <= 29; i++) {
            Day[ctr4] = { key: i, value: i };
            ctr4++;
        }
    }
    if (month === 'February' && (Number(year) % 4 != 0)) {
        for (let i = 1; i <= 28; i++) {
            Day[ctr4] = { key: i, value: i };
            ctr4++;
        }
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

    function SelectDateTime() {
        return (
            <>
                <View style={{width: '100%', paddingHorizontal: 25, flexDirection: 'row', gap: 18, marginTop: 25, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}>Select Date:</Text>
                    <Text>{month}</Text>
                    <Text>/</Text>
                    <Text>{day}</Text>
                    <Text>/</Text>
                    <Text>{year}</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15, width: '100%', paddingLeft: 25 }}>
                    <SelectList
                        setSelected={(e) => { setYear(e); }}
                        data={Year}
                        placeholder="Year"
                        boxStyles={{
                            width: 110,
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 110,
                            backgroundColor: "rgb(231,247,233)",
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
                        placeholder="Month"
                        boxStyles={{
                            width: 130,
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 130,
                            backgroundColor: "rgb(231,247,233)",
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
                        setSelected={(e) => { setDay(e); }}
                        data={Day}
                        placeholder="Day"
                        boxStyles={{
                            width: 100,
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 100,
                            backgroundColor: "rgb(231,247,233)",
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
                <View style={{width: '100%', paddingHorizontal: 25, flexDirection: 'row', gap: 18, marginTop: 25, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}>Select Time:</Text>
                    <Text>{hourStart} : {minStart} {ampmStart}</Text>
                    <Text>-</Text>
                    <Text>{hourEnd} : {minEnd} {ampmEnd}</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15, width: '100%', paddingLeft: 25 }}>
                    <SelectList
                        setSelected={(e) => { setHourStart(e); }}
                        data={Hour}
                        defaultOption={{ key: 1, value: '1' }}
                        boxStyles={{
                            width: 60,
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 60,
                            backgroundColor: "rgb(231,247,233)",
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
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 60,
                            backgroundColor: "rgb(231,247,233)",
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
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 70,
                            backgroundColor: "rgb(231,247,233)",
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
                <View style={{ flexDirection: "row", marginTop: 10, width: '100%', paddingLeft: 25 }}>
                    <SelectList
                        setSelected={(e) => { setHourEnd(e); }}
                        data={Hour}
                        defaultOption={{ key: 1, value: '1' }}
                        boxStyles={{
                            width: 60,
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 60,
                            backgroundColor: "rgb(231,247,233)",
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
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 60,
                            backgroundColor: "rgb(231,247,233)",
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
                            backgroundColor: "rgb(189,228,124)",
                            borderRadius: 0,
                            color: "rgba(45, 105, 35, 1)",
                            justifyContent: "center",
                            borderWidth: 0,
                        }}
                        dropdownStyles={{
                            width: 70,
                            backgroundColor: "rgb(231,247,233)",
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
            </>
        );
    }

    function Collection() {
        return (
            <>
                <View style={{ width: '100%', paddingHorizontal: 25 }}>
                    <TextInput
                        style={{
                            height: 150,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            padding: 15,
                            paddingRight: 8,
                            textAlignVertical: 'top',
                        }}
                        placeholder='Add Description'
                        multiline={true}
                    />
                </View>
                <View style={{width: '100%', paddingHorizontal: 25, marginTop: 5}}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            paddingLeft: 15,
                        }}
                        placeholder='Select Location'
                    />
                </View>
                {SelectDateTime()}
            </>
        );
    }

    function Assignment() {
        return (
            <>
                <View style={{ width: '100%', paddingHorizontal: 25 }}>
                    <TextInput
                        style={{
                            height: 150,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            padding: 15,
                            paddingRight: 8,
                            textAlignVertical: 'top',
                        }}
                        placeholder='Add Description'
                        multiline={true}
                    />
                </View>
                <View style={{width: '100%', paddingHorizontal: 25, marginTop: 5}}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            paddingLeft: 15,
                        }}
                        placeholder='Select Collector to Assign'
                    />
                </View>
                <View style={{width: '100%', paddingHorizontal: 25, marginTop: 5}}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            paddingLeft: 15,
                        }}
                        placeholder='Select Assignment Location'
                    />
                </View>
                {SelectDateTime()}
            </>
        );
    }

    function Event() {
        return (
            <>
                <View style={{width: '100%', paddingHorizontal: 25}}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            paddingLeft: 15,
                        }}
                        placeholder='Add Title'
                    />
                </View>
                <View style={{ width: '100%', paddingHorizontal: 25, marginTop: 5 }}>
                    <TextInput
                        style={{
                            height: 150,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            padding: 15,
                            paddingRight: 8,
                            textAlignVertical: 'top',
                        }}
                        placeholder='Add Description'
                        multiline={true}
                    />
                </View>
                <View style={{width: '100%', paddingHorizontal: 25, marginTop: 5}}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: 'rgb(231,247,233)',
                            borderRadius: 5,
                            borderWidth: 0.5,
                            borderColor: "rgb(215,233,217)",
                            color: "rgba(45, 105, 35, 1)",
                            paddingLeft: 15,
                        }}
                        placeholder='Select Location'
                    />
                </View>
                {SelectDateTime()}
            </>
        );
    }

    function DisplayType() {
        if (selectType === 'Collection') {
            return (
                <>
                    {Collection()}
                </>
            );
        }
        if (selectType === 'Assignment') {
            return (
                <>
                    {Assignment()}
                </>
            );
        }
        if (selectType === 'Event') {
            return (
                <>
                    {Event()}
                </>
            );
        }
    }

    return (
        <>
            <View style={{ position: "absolute", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "center", zIndex: 10, backgroundColor: "rgba(0, 0, 0, 0.85)", }}>
                <View style={{ position: "absolute", width: "100%", alignItems: "flex-start", top: 30, left: 20, zIndex: 10, }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('mainSched'); }}>
                        <Ionicons name="arrow-back" style={{ fontSize: 40, color: "rgb(179,229,94)" }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'flex-start', paddingTop: 90, }}>
                        <Text style={{marginBottom: 5, fontSize: 25, fontWeight: 900, color: 'rgba(113, 112, 108, 1)', width: '100%', paddingLeft: 25}}>CREATE TASK</Text>
                        <View style={{marginLeft: 25, marginBottom: 10}}>
                            <SelectList
                                setSelected={(e) => { setSelectType(e); }}
                                data={Type}
                                placeholder="Select Type"
                                boxStyles={{
                                    width: 343,
                                    backgroundColor: "rgb(189,228,124)",
                                    borderRadius: 0,
                                    color: "rgba(45, 105, 35, 1)",
                                    justifyContent: "center",
                                    borderWidth: 0,
                                }}
                                dropdownStyles={{
                                    width: 343,
                                    backgroundColor: "rgb(231,247,233)",
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
                        {DisplayType()}
                        <View style={{width: '100%', marginTop: 30, marginBottom: 90, alignItems: 'center'}}>
                            <View style={styles.button}>
                                <TouchableOpacity style={{width: '100%', height: '100%'}} activeOpacity={0.5}>
                                    <Text style={styles.buttonTxt}>Save</Text>
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
})