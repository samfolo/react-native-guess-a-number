import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  NumberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.confirmations,
    borderWidth: 2,
    borderColor: colors.accents,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  number: {
    fontSize: 70,
    color: colors.confirmations,
  },
});

export default styles;
