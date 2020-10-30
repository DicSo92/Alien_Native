import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Row from './Components/Row';
import Pixels from './Components/Pixels';

export default function App() {
  return (
    <View style={styles.container}>
      <Row>
        <Pixels number={1} />
        <Pixels number={4} blank/>
        <Pixels number={1} />
      </Row>
      <Row>
        <Pixels number={1} />
        <Pixels number={2} blank/>
        <Pixels number={1} />
      </Row>
      <Row>
        <Pixels number={6} />
      </Row>
      <Row>
        <Pixels number={2} />
        <Pixels number={1} blank/>
        <Pixels number={2} />
        <Pixels number={1} blank/>
        <Pixels number={2} />
      </Row>
      <Row>
        <Pixels number={10} />
      </Row>
      <Row>
        <Pixels number={1} />
        <Pixels number={1} blank/>
        <Pixels number={6} />
        <Pixels number={1} blank/>
        <Pixels number={1} />
      </Row>
      <Row>
        <Pixels number={1} />
        <Pixels number={1} blank/>
        <Pixels number={1} />
        <Pixels number={4} blank/>
        <Pixels number={1} />
        <Pixels number={1} blank/>
        <Pixels number={1} />
      </Row>
      <Row>
        <Pixels number={3} blank/>
        <Pixels number={1} />
        <Pixels number={2} blank/>
        <Pixels number={1} />
        <Pixels number={3} blank/>
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
