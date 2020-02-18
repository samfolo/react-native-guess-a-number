import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './StartGameScreen.styles';
import colors from '../../constants/colors';

import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberedInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = +enteredValue;
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) return;

    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
  }

  let confirmedOutput;

  if (confirmed) confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss}}>
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
            onChangeText={numberedInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={colors.accents} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGameScreen;
