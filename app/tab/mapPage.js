import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Map({navigation}) {
    return (
        <View style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 900, color: 'white'}}>This is the map page.</Text>
            <Text  style={{fontSize: 20, fontWeight: 900, color: 'white', marginBottom: 15}}>And, it is still under construction.</Text>
            <Image
                style={styles.map}
                source={require('../../assets/SampleMap.png')}
            />
            <Image
                source={require('../../assets/NatureVector.jpg')}
                style={{
                    position: 'absolute',
                    resizeMode: 'stretch',
                    width: '100%',
                    height: '100%',
                    opacity: 1,
                    zIndex: -98,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        resizeMode: 'stretch',
        width: '90%',
        height: '30%',
    },
});