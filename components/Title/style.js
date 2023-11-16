import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily({baseFont: 'Inter', weight: '600'}),
    fontSize: 24,
  },
});

export default style;
