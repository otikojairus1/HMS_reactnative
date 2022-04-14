import React from 'react';
import {View, Text, Image} from 'react-native'
import axios from 'axios'
import {BASE_URI} from '../BASE_URI'
import { Card, Snackbar, Headline, Button, Paragraph, TextInput} from 'react-native-paper';

export default function AssignTask({navigation}) {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [plan, setPlan] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorname, setErrorName] = React.useState("");
  const loadingTitle = "Scheduling..."
  const nonLoadingTitle = "Schedule task";
  const onDismissSnackBar = () => setError(false);
  //code for login in
  const onLoginHandler = (e)=>{
    if (title == "" || desc == "" || operator=="" || plan=="" ){
      setErrorName('Kindly provide complete information about the task');
      setError(true);
  }else{
    e.preventDefault();
    setIsLoading(true);
   
    //test api, replace this with the actual api call
    axios.post(BASE_URI+'/add/schedule',{
      title:title,
      description: desc,
      operator:operator,
      careplan:plan,
      time: "uigyyu"
    })
  
  .then((response)=> {
    console.log(response.data)
    setIsLoading(false);
    if(response.data.success == false){
         setErrorName("An error occured during task allocation. please try again later! ");
        setError(true);
    }else{
      setErrorName("We have successfully added the task to the system. ");
      setError(true);
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
      <Headline>NHS | TASK SCHEDULER</Headline>
      <Paragraph>Assign tasks to nurses or other employees</Paragraph>
      </View>
     
      
    <Card.Content>
      {/* <Title>Sign in</Title> */}
      <TextInput
      label="Task title"
      value={title}
      onChangeText={text => setTitle(text)}
    />
    <View style={{margin:4}}>
    <TextInput
      label="Task Description"
      value={desc}
      onChangeText={text => setDesc(text)}
    />
     <View style={{margin:4}}></View>

<TextInput
      label="operator"
      value={operator}
      onChangeText={text => setOperator(text)}
    />

<TextInput
      label="Care plan"
      value={plan}
      onChangeText={text => setPlan(text)}
    />
   
    </View>
  
    <View style={{margin:4}}></View>
     <Button icon="arrow-collapse-right" loading={isLoading} disabled={isLoading} mode="contained" onPress={onLoginHandler}>
    {isLoading? loadingTitle : nonLoadingTitle}
  </Button>
    </Card.Content>
    


    <View style={{width:'100%',alignItems:'center'}}>
   
    <Button icon="pen" mode='outlined' disabled={isLoading}  onPress={() => navigation.navigate('ScheduledTasks')}>
    View scheduled tasks
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
