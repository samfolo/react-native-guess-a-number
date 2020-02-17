import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './StartGameScreen.styles';
import colors from '../../constants/colors';

import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input 
          blurOnSubmit 
          autoCapitalize="none" 
          autoCorrect={false} 
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={colors.accents} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;
