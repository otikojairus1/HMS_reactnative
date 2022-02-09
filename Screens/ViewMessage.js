
import React from 'react';
import { Appbar, ActivityIndicator,Card,Button,
Modal, Portal,Provider,Title,TextInput,Snackbar, Avatar ,Text, Paragraph, Colors, List} from 'react-native-paper';
import {View, Dimensions ,FlatList} from 'react-native';

export default function ViewMessage({navigation, route}) {
    const {sender, receiver, id,created_at, updated_at, message} = route.params;
       const _goBack = () => navigation.goBack();
        const [text, setText] = React.useState("");
const [isLoading, setIsLoading] = React.useState(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
      const [visible, setVisible] = React.useState(false);
 const [success, setsuccess] = React.useState(false);
 const [error, setError] = React.useState(false);
 const [errorname, seterrorname] = React.useState("");
 const onDismissSnackBar = () => setError(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const sendReply = ()=>{
      setIsLoading(true);
      fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
      setIsLoading(false);
      seterrorname("We successfully sent your reply");
        setError(true);
        setVisible(false);
    
     //navigation.goBack();
      
      });
     // console.log("sending");
  }
  const containerStyle = {backgroundColor: 'white', padding: 20, margin:10};
  return (
    <Provider>
        
            <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title=" My conversation" subtitle={sender} />
            
          </Appbar.Header>

          <Card>
    <Card.Content>
      <Title>Sent on: {created_at}</Title>
      <Paragraph>Message: {message}</Paragraph>
      <Paragraph>Last edited at: {updated_at}</Paragraph>
      <Paragraph>Message ref #No: {id} </Paragraph>
    </Card.Content>
      <Button icon="pen" mode="contained" onPress={showModal}>
    Reply
  </Button>
  </Card>

  <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
         
        {!isLoading?<View> 
         <Text>Reply to {sender}</Text>
             <TextInput
      label="Reply"
      value={text}
      onChangeText={text => setText(text)}
    />
           <Button icon="reply" mode="contained" onPress={sendReply}>
    send Reply
  </Button>
   </View>:        <View>
        
     
      
      <View style={{ alignItems:"center", justifyContent:'center', marginHorizontal:10, backgroundColor:"#fff"}}>
      <ActivityIndicator animating={true} size={'small'} color={Colors.purple} />
      <Text >Sending message...</Text>
      </View>


</View>}
        </Modal>
    
      </Portal>
      
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

    </Provider>
  );
}
