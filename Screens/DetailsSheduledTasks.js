import React from 'react';
import {View, Text, Image} from 'react-native'
import axios from 'axios';
import {BASE_URI} from '../BASE_URI'
import { Card, Snackbar, Headline, Button, Paragraph, TextInput} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function DetailsSheduledTasks({navigation, route}) {
    const{id, time, description, operator, careplan, title, created_at, updated_at} = route.params;
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorname, setErrorName] = React.useState("");
  const loadingTitle = "Signing in ...";
  const nonLoadingTitle = "Sign in";
  const onDismissSnackBar = () => setError(false);
  //code for login in

  return (
    <View style={{flex: 1, justifyContent:'center' , backgroundColor:"#fff"}}>
      
      <View style={{ alignItems:'center'}}>
      <Image
        style={{ width: 200, height:200}}
       source={require('../assets/logo.png')}
      />
      <Headline>NHS</Headline>
      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Task title</Paragraph>
      <Text>{title}</Text>
      
      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Creation time</Paragraph>
      <Text>{created_at}</Text>

      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Unique Task ID</Paragraph>
      <Text>{id}</Text>

      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Description</Paragraph>
      <Text>{description}</Text>

      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Time</Paragraph>
      <Text>{time}</Text>

      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>operator</Paragraph>
      <Text>{operator}</Text>

      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>careplan</Paragraph>
      <Text>{careplan}</Text>

    
      <Paragraph style={{fontSize:20, fontWeight:"bold",}}>Task last updated at</Paragraph>
      <Text>{updated_at}</Text>
      </View>
     
      
    <Card.Content>
      {/* <Title>Sign in</Title> */}
     
    </Card.Content>


    <Snackbar
        visible={error}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'got it',
          onPress: () => {
            // Do something
          },
        }}>
        {errorname}
      </Snackbar>
  
    
  
  </View>
  );
}
