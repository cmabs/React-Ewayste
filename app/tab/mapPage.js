import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
// Start Here
import { db, auth, storage, firebase } from '../../firebase_config';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../environments';
import SideBar from '../../components/SideNav';
import { Marker } from 'react-native-maps';

export default function Map({ navigation }) {
    const isFocused = useIsFocused();
    const [openSideBar, setOpenSideBar] = useState();
    const mapRef = useRef(null);
    let searchLongitude, searchLatitude;

    const [userUploads, setUserUploads] = useState([]);
    const [state, setState] = useState({ coordinates: [] });

    const reportRef = firebase.firestore().collection("generalUsersReports");

    useEffect(() => {
        reportRef.onSnapshot(
            querySnapshot => {
                const uploads = []
                querySnapshot.forEach((doc) => {
                    const {associatedImage, dateTime, description, location, status, userId, longitude, latitude} = doc.data();
                    uploads.push({
                        id: doc.id,
                        associatedImage,
                        dateTime,
                        description,
                        location,
                        status,
                        userId,
                        longitude,
                        latitude
                    })
                })
                setUserUploads(uploads)
                setState({ coordinates: [] });
                userUploads.map((pin) => {
                    try {
                        const lat = parseFloat(pin.latitude);
                        const long = parseFloat(pin.longitude);
                        setState((prevState) => ({
                            ...prevState,
                            coordinates: [...prevState.coordinates, { name: pin.id, latitude: lat, longitude: long }],
                        }));
                    } catch (e) {
                        console.log(e);
                    }
                })
            }
        )
    }, [])







    const moveCameraTo = (latitude, longitude) => {
        const region = {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.02,
        };
      
        mapRef.current.animateToRegion(region, 1000);
    }

    useEffect(() => {
        if(!isFocused) {
            setOpenSideBar();
        }
    });

    function SideNavigation(navigation) {
        return (
            <>
                <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 99}}>
                    <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30, zIndex: 150 }} onPress={() => {setOpenSideBar()}}>
                        <Ionicons name='arrow-back' style={{ fontSize: 40, color: 'rgb(81,175,91)' }} />
                    </TouchableOpacity>
                    {SideBar(navigation)}
                    <TouchableOpacity style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0)', zIndex: -1}} onPress={() => {setOpenSideBar()}} />
                </View>
            </>
        );
    }

    return (
        <>
            <View style={{position: 'absolute', zIndex: 99, width: '100%', paddingTop: 30, flexDirection: 'row', paddingHorizontal: 20}}>
                <TouchableOpacity style={{ zIndex: 99, marginRight: '2%', height: 42, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => {setOpenSideBar(SideNavigation(navigation))}}>
                    <Ionicons name='menu' style={{ fontSize: 40, color: 'rgb(70,149,78)' }} />
                </TouchableOpacity>
                <View style={{ flex: 2, zIndex: 99 }}>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        fetchDetails
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            searchLatitude = details.geometry.location.lat;
                            searchLongitude = details.geometry.location.lng;
                            console.log('Latitude:', searchLatitude);
                            console.log('Longitude:', searchLongitude);
                            moveCameraTo(searchLatitude, searchLongitude);
                        }}
                        query={{
                            key: GOOGLE_API_KEY,
                            language: 'en',
                        }}
                        styles={{
                            textInput: {
                                height: 38,
                                fontSize: 14,
                                marginTop: 3,
                                shadowColor: 'black',
                                shadowOffset:{width: 2, height: 2},
                                shadowOpacity: 0.4,
                                shadowRadius: 4,
                                elevation: 4,
                            },
                            listView: {
                                backgroundColor:'#c8c7cc',
                            },
                            row: {
                                backgroundColor: '#FFFFFF',
                                padding: 9,
                                height: 38,
                                marginVertical: 0.01,
                            },
                            description: {
                                fontSize: 12
                            },
                        }}
                    />
                </View>
            </View>
            {/* <View style={{ position: 'absolute', right: 20, bottom: 70, zIndex: 99, height: 60, width: 60, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 0.5, borderColor: 'rgb(0,0,0)', overflow: 'hidden' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add-circle' style={{ fontSize: 60, color: 'rgb(255,203,60)', top: -2.3, right: -1.2 }} />
                    </View>
                </TouchableOpacity>
            </View> */}
            {openSideBar}
            <View>
                <View 
                    style={{
                        height: 80,
                        backgroundColor: 'rgba(126, 185, 73, 1)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        zIndex: 90,
                        shadowColor: 'black',
                        shadowOffset:{width: 3, height: 3},
                        shadowOpacity: 0.5,
                        shadowRadius: 4,
                        elevation: 4,
                    }}
                />
                <View style={{display: 'flex', height: '91%', justifyContent: 'center', alignItems: 'center', top: -10}}>
                    <MapView
                        ref={mapRef}
                        style={{width: '100%', height: '100%'}}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 10.3156992,
                            longitude: 123.88543660000005,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {state.coordinates.map(marker => (
                            <Marker
                                key={marker.name}
                                coordinate={{
                                    latitude: parseFloat(marker.latitude),
                                    longitude: parseFloat(marker.longitude)
                                }}
                                title={'Hello'}
                                description={'This is the description'}
                            />
                        ))}
                    </MapView>
                </View>
            </View>
        </>
    );
}