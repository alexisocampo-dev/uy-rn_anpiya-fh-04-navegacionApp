import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CustomDrawerNavigator} from './src/navigation/CustomDrawerNavigator';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {DrawerNavigator} from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CustomDrawerNavigator />
      {/* <DrawerNavigator /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
