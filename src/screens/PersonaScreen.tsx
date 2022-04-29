import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';
import {styles} from '../theme/appTheme';

// interface RouterParams {
//   is: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParamList, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  //   const params = route.params as RouterParams;
  const params = route.params;
  //   console.log(JSON.stringify(props, null, 3));
  useEffect(
    () =>
      navigation.setOptions({
        title: params!.nombre,
      }),
    [],
  );

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
