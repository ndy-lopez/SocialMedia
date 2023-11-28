import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  messageIcon: {padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100},
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFF',
    fontSize: 6,
    fontWeight: 600,
    fontFamily: getFontFamily({baseFont: 'Inter', weight: '600'}),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
