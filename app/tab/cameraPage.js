import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Button, RefreshControl, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraOpen({ navigation }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
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

    if(hasCameraPermission === false) {
        return <Text>No access to camera</Text>
    }

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
                    <Image source={{uri: image}} style={{flex: 1, borderRadius: 20}} />
                }
                {image ?
                    <View style={{alignItems: 'center', paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50}}>
                        <Button title='RETAKE PHOTO' onPress={() => {setImage(null)}} />
                        <Button title='SAVE PHOTO' onPress={() => {}}/>
                    </View>
                    :
                    <View style={{alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back)
                        }}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                <Ionicons name={type === CameraType.back ? 'camera-reverse-outline' : 'camera-reverse'} style={{color: 'white', fontSize: 33}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={takePicture}>
                            <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                <Ionicons name="camera" style={{color: 'rgb(81,175,91)', fontSize: 40}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => {
                            setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
                        }}>
                            <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 1000}}>
                                <Ionicons name={flash === Camera.Constants.FlashMode.off ? 'flash-outline' : 'flash'} style={{color: 'white', fontSize: 30}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
})