import {FC, useState} from 'react';
import {Text, View} from 'react-native';
import CustomTextInput from '../../components/CustomtextInput/CustomtextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/StackNavigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type SecondScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SecondScreen'
>;

type SecondScreenRouteProp = RouteProp<RootStackParamList, 'SecondScreen'>;

const SecondScreen: FC = () => {
  const navigation = useNavigation<SecondScreenNavigationProp>();
  const [userAge, setUserAge] = useState('');

  const route = useRoute<SecondScreenRouteProp>();
  const {userName} = route.params;

  const handleSubmit = () => {
    navigation.navigate('ThirdScreen', {userName, userAge});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.componentPosition}>
        <Text style={styles.userNameStyle}>Hi, {userName}</Text>
        <Text style={styles.headingStyle}>Enter Your Age Here</Text>
        <View style={styles.textInputPosition}>
          <CustomTextInput
            type="mobile"
            value={userAge}
            onChangeText={setUserAge}
            placeholder="Enter your age"
          />
        </View>
        <View style={styles.buttonPosition}>
          {userAge !== '' ? (
            <CustomButton text="Submit" onPress={handleSubmit} />
          ) : (
            <CustomButton text="Back" onPress={handleBack} />
          )}
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;
