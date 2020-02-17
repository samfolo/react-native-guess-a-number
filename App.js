import React from 'react';
import { View, Text } from 'react-native';
import styles from './App.styles';

import Header from './components/Header/Header';
import StartGameScreen from './screens/StartGameScreen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}
