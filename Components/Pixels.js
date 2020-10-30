import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './Row'

const Pixels = ({number, blank}) => {
    let pixels = []
    for (let index = 0; index < number; index++) {
        pixels = [
            ...pixels,
            <View key={index} style={ [styles.pixel, blank && styles.blankPixel] } />
        ]
    }
    return <Row> {pixels} </Row>
}

const pixelLenght = 20

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    pixel: {
        width: pixelLenght,
        height: pixelLenght,
        backgroundColor: '#0f0'
    },
    blankPixel: {
        backgroundColor: 'transparent'
    }
})
export default Pixels
