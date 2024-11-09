import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F2F1F6',
    borderRadius: scale(6),
    flexDirection: 'row',
    height: verticalScale(40),
    position: 'relative',
    width: scale(330),
  },
  inputTextStyle: {
    color: '#000000',
    fontSize: moderateScale(14),
    flex: 1,
    paddingLeft: scale(20),
    paddingVertical: verticalScale(8),
  },
});

export default styles;
