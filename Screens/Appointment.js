import { View } from 'react-native';
import React from 'react';
import { Avatar, Button, Card, Title,Appbar, 
 Paragraph, Dialog, Portal, Provider, ActivityIndicator, Text,  Colors, List} from 'react-native-paper';

import { Dimensions ,FlatList} from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const Rightcontent = props => <Text>Verified doctor</Text>


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

export default function Appointment({navigation, route}) {
     const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
      setVisible(false)
      navigation.goBack();
      };

    const {name, email, regno, created_at, availability} = route.params;
    const _goBack = () => navigation.goBack();
    const [isLoading, setIsLoading] = React.useState(false);

    const bookAppointment = ()=>{
        setIsLoading(true);
          fetch('https://consultancy-api.herokuapp.com/api/available/doctors')
      .then(response => response.json())
      .then(
        function (response){
         // console.log(response.Data[0]);
        setIsLoading(false);
        setVisible(true);
        }
          );
           
    }

    if(isLoading){
         return (
        <View>
        
        <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Available Doctors" subtitle="My personalized doctors list" />
        
      </Appbar.Header>
      
      <View style={{width:windowWidth, height:windowHeight, alignItems:"center", justifyContent:'center', marginHorizontal:10, backgroundColor:"#fff"}}>
      <ActivityIndicator animating={true} size={'small'} color={Colors.purple} />
      <Text >We are personalizing your experience</Text>
      </View>


</View>
      );
    }else{

    
  return (
      
   <Provider>
      <View>
        <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="Book Appointment"  />
                
            </Appbar.Header>

               <Card>
    <Card.Title title={name} subtitle={email} left={LeftContent} right={Rightcontent}/>
    <Card.Content>
      <Title>Hello Patient, My name is Dr. {name}</Title>
      <Paragraph>You can send me a booking request and I'll definitely get back to you when I see it. I will Also 
      send you a message via the app's inbox section, make sure to check that more often.</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button onPress={_goBack}>Cancel</Button>
      <Button onPress={bookAppointment}>Book Appointment</Button>
    </Card.Actions>
  </Card>

      <View>
        {/* <Button onPress={showDialog}>Show Dialog</Button> */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Everything seems ok!</Dialog.Title>
            <Dialog.Content>

              <Paragraph>You've successfully made a booking request. Remember to look 
              for the reply in your Inbox. Meanwhile lets work on processing the request.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
       </View>
    </Provider>



          

   

  );}
}
