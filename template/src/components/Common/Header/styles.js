import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#44821a',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 12,
  },
  marginRight: {
    marginRight: 14,
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: 'white',
  },
});
