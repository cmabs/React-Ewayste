import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';

export default function CameraOpen({ navigation: {goBack} }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status == 'granted');
        })();
    }, [])

    const takePicture = async () => {
        if(cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch(e) {
                console.log(e);
            }
        }
    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                //allowsEditing: true,
                //aspect: [4,3],
                quality: 1
            });
            console.log(result.assets[0]);
            setImage(result.assets[0].uri);
        } catch(e) {}
    }

    if(hasCameraPermission === false) {
        return <Text>No access to camera</Text>
    }
    if(hasGalleryPermission === false) {
        return <Text>No access to gallery</Text>
    }

    const isFocused = useIsFocused();
        
    if(isFocused) {
        return (
            <>
                <View style={styles.container}>
                    {!image ?
                        <Camera 
                            style={{height: '70%', borderRadius: 20}}
                            type={type}
                            flashMode={flash}
                            ref={cameraRef}
                        />
                        :
                        <View style={{flex: 1, borderRadius: 20, marginTop: 20}}>
                            <Image source={{uri: image}} style={{flex: 1, resizeMode: 'contain'}} />
                        </View>
                    }
                    {image ?
                        <View style={{alignItems: 'center', paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, marginBottom: 50}}>
                            <Button title='RETAKE PHOTO' onPress={() => {setImage(null)}} />
                            <Button title='SAVE PHOTO' onPress={() => {}}/>
                        </View>
                        :
                        <View style={{alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginTop: 10}}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {goBack();}}>
                                <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                    <Ionicons name='arrow-undo-outline' style={{color: 'white', fontSize: 28}} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                setType(type === CameraType.back ? CameraType.front : CameraType.back)
                            }}>
                                <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                    <Ionicons name={type === CameraType.back ? 'camera-reverse-outline' : 'camera-reverse'} style={{color: 'white', fontSize: 28}} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} onPress={takePicture}>
                                <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000, marginHorizontal: 20}}>
                                    <Ionicons name="camera" style={{color: 'rgb(81,175,91)', fontSize: 40}} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
                            }}>
                                <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                    <Ionicons name={flash === Camera.Constants.FlashMode.off ? 'flash-outline' : 'flash'} style={{color: 'white', fontSize: 25}} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} onPress={pickImage}>
                                <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                    <Ionicons name='image-outline' style={{color: 'white', fontSize: 28}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </>
        );
    } else if(!isFocused) {
        console.log("Camera is not Focused")
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
})