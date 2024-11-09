import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FC} from 'react';
import {RootStackParamList} from '../../navigators/StackNavigator';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ThirdScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ThirdScreen'
>;

type ThirdScreenRouteProp = RouteProp<RootStackParamList, 'ThirdScreen'>;

const ThirdScreen: FC = () => {
  const navigation = useNavigation<ThirdScreenNavigationProp>();
  const route = useRoute<ThirdScreenRouteProp>();

  const {userName, userAge} = route.params;

  const handleDone = () => {
    navigation.navigate('FirstScreen', {userName: ''});
  };

  return (
    <View style={styles.container}>
      <View style={styles.componentPosition}>
        <Text style={styles.userInfoHeadingStyle}>Your Information</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoHeadingStyle}>Your Name : </Text>
          <Text style={styles.userNameText}>{userName}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoHeadingStyle}>Your Age : </Text>
          <Text style={styles.userAgeText}>{userAge}</Text>
        </View>
        <View style={styles.buttonPosition}>
          {userAge !== '' ? (
            <CustomButton text="Done" onPress={handleDone} />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default ThirdScreen;
