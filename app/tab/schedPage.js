import React from 'react'; 
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native"; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Calendar } from 'react-native-calendars'; 
import { useIsFocused } from '@react-navigation/native'; 
import { useState, useEffect, useRef } from 'react'; 
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { db } from '../../firebase_config'; 
import { collection, addDoc, getDocs,where, query} from 'firebase/firestore';

export default function ScheduleAut({navigation}) { 
  const [openSideBar, setOpenSideBar] = React.useState();
  const [viewSched, setViewSched] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false); 

  const [schedule, setSchedule] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = getCurrentDate();

  function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
  
    return currentDate;
  }

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date

    const fetchReports = async () => {
      try {
        // Query for reports today
        const todayQuery = query(collection(db, 'generalUsersReports'), where('dateTime', '==', currentDate));
        const todaySnapshot = await getDocs(todayQuery);
        const reportsTodayCount = todaySnapshot.size;
        setReportsToday(reportsTodayCount);

        // Query for all reports
        const allReportsQuery = query(collection(db, 'generalUsersReports'));
        const allReportsSnapshot = await getDocs(allReportsQuery);
        const totalReportsCount = allReportsSnapshot.size;
        setTotalReports(totalReportsCount);
      } catch (error) {
        console.log('Error fetching reports:', error);
      }
    };

    fetchReports();
    }, []);

    useEffect(() => { 
        const fetchSchedule = async () => { 
          try { 
            const querySnapshot = await getDocs(collection(db, 'schedule')); 
            const scheduleData = querySnapshot.docs.map((doc) => doc.data()); 
            setSchedule(scheduleData); 
          } catch (error) { 
            console.log('Error fetching schedule:', error); 
          } 
        }; 
        fetchSchedule(); 
      }, []); 
    const isFocused = useIsFocused(); 
    useEffect(() => { 
        if(!isFocused) { 
            setOpenSideBar(); 
        } 
    }); 
    const onRefresh = React.useCallback(() => { 
        setRefreshing(true); 
        setTimeout(() => { 
            setRefreshing(false); 
        }, 1000); 
    }, []); 
    function getMarkedDates(scheduleData) {
      return scheduleData.reduce((markedDates, item) => {
          if (item && item.selectedDate) {
              let color = '';
              if (item.type === 'Collection') {
                  color = 'rgb(255, 203, 60)';
              } else if (item.type === 'Event') {
                  color = 'rgb(72, 229, 239)';
              } else if (item.type === 'Assignment') {
                  color = 'rgb(135, 255, 116)';
              }
              markedDates[item.selectedDate] = {
                  selected: true,
                  selectedColor: color,
              };
          }
          return markedDates;
      }, {});

      function getCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString(undefined, options);
      
        return currentDate;
      }
  }
    function SideNavigation(navigation) { 
        return ( 
            <> 
                <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 99 }}> 
                    <View style={{ width: 280, height: '100%', backgroundColor: '#ffffff', paddingBottom: 60, alignItems: 'center' }}> 
                        <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar()}}> 
                            <Ionicons name='arrow-back' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} /> 
                        </TouchableOpacity> 
                        <View style={{ width: '100%', alignItems: 'center', gap: 10, marginTop: 60 }}> 
                            <Image 
                                source={require('../../assets/E-Wayste-logo.png')} 
                                style={{width: 180, height: 161, marginBottom: 10}} 
                            /> 
                            <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}> 
                                <TouchableOpacity activeOpacity={0.5} onPress={() => { setOpenSideBar(); navigation.navigate('profile') }}> 
                                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}> 
                                        <Text>User Profile</Text> 
                                    </View> 
                                </TouchableOpacity> 
                            </View> 
                            <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}> 
                                <TouchableOpacity activeOpacity={0.5}> 
                                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}> 
                                        <Text>Settings</Text> 
                                    </View> 
                                </TouchableOpacity> 
                            </View> 
                        </View> 
                        <View style={{position: 'absolute', width: '95%', height: 40, bottom: 80, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}> 
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { setOpenSideBar(); navigation.navigate('login') }}> 
                                <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}> 
                                    <Text>Logout</Text> 
                                </View> 
                            </TouchableOpacity> 
                        </View> 
                    </View> 
                    <TouchableOpacity style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0)', zIndex: -1}} onPress={() => {setOpenSideBar()}} /> 
                </View> 
            </> 
        ); 
    } 
    function ViewSchedButton(scheduleData) { 
        return ( 
          <> 
            <View style={{ width: 330, marginTop: 20, alignItems: 'center' }}> 
              <View style={{width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5}}> 
                <TouchableOpacity activeOpacity={0.5} onPress={() => { setViewSched(true); }}> 
                  <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)'}}> 
                    <Text>View all Events</Text> 
                  </View> 
                </TouchableOpacity> 
              </View> 
            </View> 
          </> 
        ); 
      } 
      function getEventBackgroundColor(event) { 
        const currentDate = new Date().toISOString().substring(0, 10); 
        if (event.selectedDate === currentDate) { 
          return 'rgba(255, 203, 60, 0.5)'; 
        } else if (event.type === 'Collection') { 
          return 'rgba(255, 203, 60, 0.5)'; 
        } else if (event.type === 'Event') { 
          return 'rgba(72, 229, 239, 0.5)'; 
        } else if (event.type === 'Assignment') { 
          return 'rgba(135, 255, 116, 0.5)'; 
        } 
    } 
    function ViewSchedExtend(scheduleData) { 
        const sortedScheduleData = [...scheduleData].sort((a, b) => { 
          return new Date(a.selectedDate) - new Date(b.selectedDate); 
        }); 
        // Get the selected month from the selectedDate 
        const selectedMonth = new Date(sortedScheduleData[0].selectedDate).getMonth(); 
        // Filter the scheduleData to only include events from the selected month 
        const filteredScheduleData = sortedScheduleData.filter((event) => { 
          const eventMonth = new Date(event.selectedDate).getMonth(); 
          return eventMonth === selectedMonth; 
        }); 
        return ( 
          <> 
            <View style={{ width: 315, marginTop: 20, gap: 10 }}> 
              <View style={{ width: '100%', borderWidth: 0.5 }} /> 
              {filteredScheduleData.map((event, index) => ( 
                <View key={index} style={{ width: '100%', flexDirection: 'row' }}> 
                  <View style={{ width: 80, height: 60, borderRadius: 20, backgroundColor: getEventBackgroundColor(event), justifyContent: 'center', alignItems: 'center' }}> 
                    <Text style={{ fontSize: 30, fontWeight: 800 }}>{event.selectedDate.substring(8, 10)}</Text> 
                  </View> 
                  <View style={{ position: 'absolute', width: 225, height: 60, borderRadius: 10, backgroundColor: getEventBackgroundColor(event), right: 0, justifyContent: 'center', paddingHorizontal: 15 }}> 
                    <Text style={{ fontSize: 18, fontWeight: 800 }}>{event.type}</Text> 
                    <Text>{event.startTime}</Text> 
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 10, top: 5 }} onPress={() => { navigation.navigate('changeSched') }}> 
                      <Ionicons name='ellipsis-horizontal' style={{ fontSize: 20 }} /> 
                    </TouchableOpacity> 
                  </View> 
                </View> 
              ))} 
            </View> 
            <View style={{ width: 330, marginTop: 20, alignItems: 'center' }}> 
              <View style={{ width: '95%', height: 40, backgroundColor: 'rgb(230, 230, 230)', overflow: 'hidden', borderRadius: 10, borderWidth: 0.5, marginBottom: 15 }}> 
                <TouchableOpacity activeOpacity={0.5} onPress={() => { setViewSched(false); }}> 
                  <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(247, 245, 243)' }}> 
                    <Text>Show less</Text> 
                  </View> 
                </TouchableOpacity> 
              </View> 
            </View> 
          </> 
        ); 
    }   
    return ( 
      <>
      <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 99 }} onPress={() => {setOpenSideBar(SideNavigation(navigation))}}>
          <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
      </TouchableOpacity>
      {openSideBar}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
          <SafeAreaView style={styles.container}>
              <View style={{width: '100%', flexDirection: 'row', top: 20, justifyContent: 'center', paddingTop: 14}}>
                  <Text style={{ fontSize: 25, fontWeight: 900, color: 'rgb(81,175,91)' }}>SCHEDULE</Text>
              </View>
              <Text style={{ position: 'absolute', right: 20, top: 80 }}>
                  <Text style={{ fontWeight: 600 }}> {currentDate}</Text>
                </Text>
              <View style={{ marginTop: 60 }}>
                  <Calendar style={{ width: 330, backgroundColor: 'rgb(236, 252, 238)', borderRadius: 10, borderWidth: 0.5, borderColor: 'rgb(16, 139, 0)', paddingBottom: 15 }}
                      markedDates={getMarkedDates(schedule)} 
                  />
              </View>
              <View style={{width: 330, marginTop: 10, gap: 5}}>
             
              <View style={{ marginTop: 40 }}>
              <Calendar
                style={{
                width: 320,
                backgroundColor: 'rgb(236, 252, 238)',
                borderRadius: 10,
                paddingBottom: 15,
                elevation: 4
                }}
                markedDates={getMarkedDates(schedule)}
            />
              </View>
              <View style={{width: 320, marginTop: 10, gap: 5}}>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                      <View style={{ width: 20, height: 20, backgroundColor: 'rgb(242, 190, 45)' }} />
                      <Text>Schedule for Collection</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                      <View style={{ width: 20, height: 20, backgroundColor: 'rgb(134, 231, 237)' }} />
                      <Text>Special Events</Text>
                      </View> 
                  <View style={{ flexDirection: 'row', gap: 10 }}> 
                      <View style={{ width: 20, height: 20, backgroundColor: 'rgb(135, 255, 116)'}} /> 
                      <Text>Assignment</Text>  
                  </View>
              </View>
              {viewSched ? ViewSchedExtend(schedule) : ViewSchedButton(schedule)} 
          </SafeAreaView>
      </ScrollView>
  </>
    ); 
} 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: 'white',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingBottom: 60, 
    }, 
   
    body: { 
        position: 'relative', 
        width: 350, 
        paddingTop: 50, 
        paddingBottom: 10, 
        alignItems: 'center', 
    }, 
})

