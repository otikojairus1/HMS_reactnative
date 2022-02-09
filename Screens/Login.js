import React from 'react';
import {View, Text, Image} from 'react-native'

import { Card, Snackbar, Headline, Button, Paragraph, TextInput} from 'react-native-paper';

export default function Login({navigation}) {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorname, setErrorName] = React.useState("");
  const loadingTitle = "Signing in ...";
  const nonLoadingTitle = "Sign in";
  const onDismissSnackBar = () => setError(false);
  //code for login in
  const onLoginHandler = (e)=>{
    if (text == "" || password == "" ){
      setErrorName('Kindly provide your email and password to continue');
      setError(true);
  }else{
    e.preventDefault();
    setIsLoading(true);
   
    //test api, replace this with the actual api call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then((response)=> {
    setIsLoading(false);
    // setErrorName("working well");
    // setError(true);
    navigation.navigate('Patient Dashboard');

  })

  }




    // console.log({
    //   'email':text,
    //   'password':password
    // });
  }




  return (
    <View style={{flex: 1, justifyContent:'center' , backgroundColor:"#fff"}}>
      
      <View style={{ alignItems:'center'}}>
      <Image
        style={{ width: 200, height:200}}
       source={require('../assets/logo.png')}
      />
      <Headline>HMS</Headline>
      <Paragraph>Welcome back ! Sign in here</Paragraph>
      </View>
     
      
    <Card.Content>
      {/* <Title>Sign in</Title> */}
      <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
    <View style={{margin:4}}></View>
      <TextInput
      label="Password"
      onChangeText={text => setPassword(text)}
      secureTextEntry
      right={<TextInput.Icon name="eye" />}
    />
    <View style={{margin:4}}></View>
     <Button icon="arrow-collapse-right" loading={isLoading} disabled={isLoading} mode="contained" onPress={onLoginHandler}>
    {isLoading? loadingTitle : nonLoadingTitle}
  </Button>
    </Card.Content>
    
    <View style={{width:'100%',alignItems:'center'}}>
    <Text style={{fontSize:15}}>Dont have an account with us?</Text>
    <Button icon="pen" mode='outlined' disabled={isLoading}  onPress={() => console.log('Pressed')}>
    Create an account
  </Button>
    </View>

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
