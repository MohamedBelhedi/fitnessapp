import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  React,{useState,useEffect} from 'react'
import Beine from './screens/Beine';
import Brust from './screens/Brust';
import Schulter from './screens/Schulter';

import Home from './screens/Welcomescreen';


const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      style={{backgroundColor:"blue"}}
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
    <Stack.Screen  name="Beine" component={Beine} />
      <Stack.Screen name="Brust" component={Brust} />
      <Stack.Screen name="Schulter" component={Schulter} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


