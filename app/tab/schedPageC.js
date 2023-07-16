import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl } from "react-native";
import SessionStorage from 'react-native-session-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

export default function ScheduleCol({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

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
            <View>
                {temp1}
            </View>
        );
    }

    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }}>
                <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }}  onPress={() => {navigation.navigate('notification')}}>
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
                        <Text style={{ fontSize: 25, fontWeight: 900, color: 'rgb(81,175,91)' }}>SCHEDULE</Text>
                    </View>
                    <Text style={{position: 'absolute', right: 20, top: 80}}>
                        <Text style={{fontWeight: 600}}>Wednesday</Text>, April 19, 2023 <Ionicons name='caret-down-circle-outline' style={{fontSize: 20}} />
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{fontSize: 20, fontWeight: 700, color: 'rgba(113, 112, 108, 1)', marginBottom: 5}}>Banilad, Cebu City</Text>
                        <Calendar style={{ width: 350, backgroundColor: 'rgb(236, 252, 238)', borderRadius: 10, borderWidth: 0.5, borderColor: 'rgb(16, 139, 0)', paddingBottom: 15 }}
                            markedDates={{
                                '2023-07-02': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-06': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-12': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-17': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-25': { selected: true, selectedColor: 'rgb(242, 190, 45)' },
                                '2023-07-27': { selected: true, selectedColor: 'rgb(134, 231, 237)' }
                            }}
                        />
                    </View>
                    <View style={{width: 350, marginTop: 10, gap: 5}}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ width: 20, height: 20, backgroundColor: 'rgb(242, 190, 45)' }} />
                            <Text>Schedule for Collection</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ width: 20, height: 20, backgroundColor: 'rgb(134, 231, 237)' }} />
                            <Text>Special Events</Text>
                        </View>
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
});