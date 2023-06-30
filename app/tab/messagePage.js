import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Message({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is the message page.</Text>
            <Text>And, it is still under construction.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(246, 242, 239)',
        justifyContent: 'center',
        alignItems: 'center',
    },
})