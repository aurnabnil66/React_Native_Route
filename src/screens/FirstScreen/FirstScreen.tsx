import {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CustomTextInput from '../../components/CustomtextInput/CustomtextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {RootStackParamList} from '../../navigators/StackNavigator';
import styles from './style';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type FirstScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstScreen'
>;

type FirstScreenRouteProp = RouteProp<RootStackParamList, 'FirstScreen'>;

const FirstScreen: FC = () => {
  const navigation = useNavigation<FirstScreenNavigationProp>();
  const route = useRoute<FirstScreenRouteProp>();
  const [userName, setUserName] = useState('');

  // If a userName is passed in the route params, update the state
  useEffect(() => {
    if (route.params?.userName !== undefined)
      setUserName(route.params.userName);
  }, [route.params?.userName]);

  const handlePress = () => {
    navigation.navigate('SecondScreen', {userName});
  };

  return (
    <View style={styles.container}>
      <View style={styles.componentPosition}>
        <Text style={styles.headingStyle}>Enter Your Name Here</Text>
        <View style={styles.textInputPosition}>
          <CustomTextInput
            type="string"
            value={userName}
            onChangeText={setUserName}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.buttonPosition}>
          {userName !== '' ? (
            <CustomButton text="Submit" onPress={handlePress} />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
