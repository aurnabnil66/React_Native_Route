import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen/ThirdScreen';
import {FC} from 'react';

export type RootStackParamList = {
  FirstScreen: {userName?: ''} | undefined;
  SecondScreen: {userName: string};
  ThirdScreen: {userName: string; userAge: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{title: 'First Screen', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{title: 'Second Screen', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{title: 'Third Screen', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
