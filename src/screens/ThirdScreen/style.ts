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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    color: 'blue',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  userAgeText: {
    color: 'red',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  userInfoHeadingStyle: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  buttonPosition: {
    marginTop: scale(20),
  },
});

export default styles;
