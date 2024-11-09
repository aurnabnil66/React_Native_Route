import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  componentPosition: {
    top: scale(100),
    alignItems: 'center',
  },
  headingStyle: {
    color: '#000000',
    fontSize: moderateScale(16),
  },
  userNameStyle: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  textInputPosition: {
    marginTop: scale(15),
  },
  buttonPosition: {
    marginTop: scale(20),
  },
});

export default styles;
