import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Map({navigation}) {
    return (
        <View>
            <Image
                style={styles.map}
                source={require('../../assets/SampleMap.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 700,
        left: -200,
    },
});