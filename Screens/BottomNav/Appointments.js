import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Appointments({navigation}) {
    const _goBack = () => navigation.goBack();


  return (

    <Appbar.Header>
    <Appbar.BackAction onPress={_goBack} />
    <Appbar.Content title="My Appointments" subtitle="Pending list" />
    
  </Appbar.Header>
  );
}
