import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import Row from './Components/Row';
import Pixels from './Components/Pixels';

export default function App() {
    return (
        <View style={styles.container}>
            <Row>
                <Pixels number={5}/>
            </Row>
            <Row>
                <Pixels number={9}/>
            </Row>
            <Row>
                <Pixels number={11}/>
            </Row>
            <Row>
                <Pixels number={2}/>
                <Pixels number={1} blank/>
                <Pixels number={1}/>
                <Pixels number={1} blank/>
                <Pixels number={1}/>
                <Pixels number={1} blank/>
                <Pixels number={1}/>
                <Pixels number={1} blank/>
                <Pixels number={1}/>
                <Pixels number={1} blank/>
                <Pixels number={2}/>
            </Row>
            <Row>
                <Pixels number={15}/>
            </Row>
            <Row>
                <Pixels number={3}/>
                <Pixels number={1} blank/>
                <Pixels number={3}/>
                <Pixels number={1} blank/>
                <Pixels number={3}/>
            </Row>
            <Row>
                <Pixels number={1}/>
                <Pixels number={7} blank/>
                <Pixels number={1}/>
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
