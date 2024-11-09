import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  buttonProperties: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: scale(30),
    flexDirection: 'row',
    gap: scale(10),
    height: verticalScale(56),
    justifyContent: 'center',
    width: scale(315),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(18),
  },
});

export default styles;
