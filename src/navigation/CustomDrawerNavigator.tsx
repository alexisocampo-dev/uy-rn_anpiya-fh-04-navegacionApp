import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/ejemplo-creativo-del-vector-placeholder-perfil-avatar-defecto-aislado-en-fondo-plantilla-gris-mes-espacio-blanco-de-la-foto-118823351.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBoton}>
          <Text
            style={styles.menuTexto}
            onPress={() => navigation.navigate('StackNavigator')}>
            Navegacion Stack
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton}>
          <Text
            style={styles.menuTexto}
            onPress={() => navigation.navigate('Settings')}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
