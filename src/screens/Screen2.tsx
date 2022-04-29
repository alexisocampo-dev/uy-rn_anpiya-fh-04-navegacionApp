import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export const Screen2 = () => {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
};
