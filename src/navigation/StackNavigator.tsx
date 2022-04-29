import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen1} from '../screens/Screen1';
import {Screen2} from '../screens/Screen2';
import {Screen3} from '../screens/Screen3';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Screen2"
      screenOptions={{
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{title: 'Pagina 1'}}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{title: 'Pagina 1'}}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{title: 'Pagina 1'}}
      />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
