import {React, useEffect, useState} from 'react';
import { Appbar,Avatar, ActivityIndicator, Text, Paragraph, Colors, List,
  Button, Dialog, Portal, Provider } from 'react-native-paper';

import {View, Dimensions , TouchableOpacity,FlatList} from 'react-native';


export default function AvailableDoctors({navigation}) {

  let data= [];
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState(data);
  const [alarm, setAlarm] = useState(false);
  const [visible, setVisible] = useState(false);

  
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);


  const onClick = () => {
    //console.log(alarm);
    setAlarm((previousState)=>!previousState);

  }
 
    const _goBack = () => navigation.goBack();

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const renderItem = ({ item }) => (
      <List.Item
      title={item.name}
      description={item.email}
      onPress={()=>{navigation.navigate('Appointment',{
        'name':item.name,
        "email":item.email,
        'regno':item.regno,
        'availability':item.availability,
        'created_at':item.created_at
      })}}
      left={props => <Avatar.Text size={50} label={item.name.substring(0, 1)} />}
      right={props => <List.Icon {...props} icon="shield-star-outline" />}
    />
    ); 

    let bg1;
      if (alarm){
        bg1 = "red";
      }else{
        bg1 = "green";
      
    }

    if(!isLoading){
      return (
        <View>
        
            <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Available Doctors" subtitle="My personalized doctors list" />
            
          </Appbar.Header>
        
        {/* <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
         */}

         <TouchableOpacity onPress={onClick} style={{width:'100%',alignItems:'center', justifyContent:'center', backgroundColor:bg1, height:50, marginTop:10, borderRadius:10}}>
              {alarm ? <Text style={{color:"#fff", fontSize:30, fontWeight:"bold"}}>Alarm ON!!!</Text>  : <Text style={{color:"#fff", fontSize:30, fontWeight:"bold"}}>RAISE ALARM</Text>    } 
            </TouchableOpacity>    

            {/* dialog */}

            <View>
            
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
       
      </View>



            {/* emd of dialog */}
          </View>
          );
    }else{
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
    }


}
