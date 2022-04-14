import axios from 'axios';
import React from 'react';
import {View, Text, Image} from 'react-native'

import { Card, Snackbar, Headline, Button, Paragraph, TextInput, RadioButton} from 'react-native-paper';
import { BASE_URI } from '../BASE_URI';

export default function SignUp({navigation}) {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorname, setErrorName] = React.useState("");
  const loadingTitle = "creating your account ...";
  const nonLoadingTitle = " Create an account";
  const [checked, setChecked] = React.useState('first');
  const onDismissSnackBar = () => setError(false);
  //code for login in
  const onLoginHandler = (e)=>{
    if (text == "" || password == "" ){
      setErrorName('Kindly provide your email and password to continue');
      setError(true);
  }else{
    e.preventDefault();
    setIsLoading(true);

    let accountType;
    if(text === 'admin@HNS.com'){
      accountType = 'admin';
    }else{
      accountType = 'employee';
    }
   
    //test api, replace this with the actual api call
    axios.post(BASE_URI+'/register',{
      AccountType:accountType,
      email: text,
      password:password
    })
  
  .then((response)=> {
    console.log(response.data)
    setIsLoading(false);
    if(response.data.success == false){
         setErrorName("An error occured during registration. Use a unique email and lengthy password! ");
        setError(true);
    }else{
      navigation.navigate('Patient Dashboard');
    }
    // setErrorName("working well");
    // setError(true);
   

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
      <Headline>NHS</Headline>
      <Paragraph>Hello there! Get started by creating an account</Paragraph>
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
    <Text style={{fontSize:15}}>Already having an account with us?</Text>
    <Button icon="pen" mode='outlined' disabled={isLoading}  onPress={() => navigation.navigate('Login')}>
   log in
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
