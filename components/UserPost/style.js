import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily({baseFont: 'Inter', weight: 600}),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily({baseFont: 'Inter', weight: 400}),
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  postImage: {
    alignItems: 'center',
    marginTop: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
});

export default style;
