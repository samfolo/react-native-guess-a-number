import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './NumberContainer.styles';
import colors from '../../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.NumberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

export default NumberContainer;
