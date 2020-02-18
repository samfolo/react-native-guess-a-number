import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styles from './StartGameScreen.styles';
import colors from '../../constants/colors';

import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import NumberContainer from '../../components/NumberContainer/NumberContainer';

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
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!', 
        'Number has to be a number between 1 and 99', 
        [{text: '  Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    };

    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if (confirmed) confirmedOutput = (
    <Card style={styles.chosenNumberContainer}>
      <Text style={styles.chosenNumber}>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title={'Start Game'} />
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
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
