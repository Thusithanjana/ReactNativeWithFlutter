import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import DisplayScreen from './screens/DisplayScreen';
import HomePage from './screens/HomePage';

export default function App() {


  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Display" component={DisplayScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

