import React from 'react';
import {View, Text, Image} from 'react-native'
import axios from 'axios';
import {BASE_URI} from '../BASE_URI'
import { Card, Snackbar, Headline, Button, Paragraph, TextInput} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}) {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [time, setTime] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorname, setErrorName] = React.useState("");
  const loadingTitle = "Adding Occurence...";
  const nonLoadingTitle = "Add Occurence";
  const onDismissSnackBar = () => setError(false);
  //code for login in
  const onLoginHandler = (e)=>{
    
      if (title == "" || desc == "" || time == "" ){
        setErrorName('Kindly provide complete details about the occurence');
        setError(true);
    }else{
      e.preventDefault();
      setIsLoading(true);
     
      //test api, replace this with the actual api call
      axios.post(BASE_URI+'/add/occurence',{
  
        time: time,
        description:desc,
        title:title
      })
   
    .then((response)=> {
      console.log(response.data);
      if(response.data.success == false){
        setIsLoading(false);
        setErrorName("We encountered a problem while working on your request!");
         setError(true);
      }else{
        setIsLoading(false);
        setErrorName("Occurence added successfully");
         setError(true);
    
        
      }
   
  
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
      <Paragraph>Hello Admin ! Add an Occurence Here</Paragraph>
      </View>
     
      
    <Card.Content>
      {/* <Title>Sign in</Title> */}
      <TextInput
      label="title"
      value={title}

      onChangeText={text => setTitle(text)}
    />
    <View style={{margin:4}}></View>
      <TextInput
      label="description"
      value={desc}
      onChangeText={text => setDesc(text)}
     
      
    />
    <View style={{margin:4}}></View>
    <TextInput
      label="time"
      value={time}
      onChangeText={text => setTime(text)}
     
      
    />
     <Button icon="arrow-collapse-right" loading={isLoading} disabled={isLoading} mode="contained" onPress={onLoginHandler}>
    {isLoading? loadingTitle : nonLoadingTitle}
  </Button>
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
