import {React, useEffect, useState} from 'react';
import { Appbar, ActivityIndicator, Avatar ,Text, Paragraph, Colors, List} from 'react-native-paper';
import {View, Dimensions ,FlatList} from 'react-native';
import axios from 'axios'


export default function InboxMain({navigation}) {

  let data= [];
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState(data);
 useEffect(() => {
     // data = [];
        //using a fake rest api, will replace with the voters api when done
        axios.post('https://consultancy-api.herokuapp.com/api/inbox',{
          'owner':"janet@yahoo.com"
        })
       // .then(response => response.json())
        .then(
          function (response){
           console.log(response.data);
            response.data.response.forEach(element => {
              
              data.push(element);
               //setListData(data);
              setIsLoading(false);
            });
          }
            );
           
            
        } );
    const _goBack = () => navigation.goBack();

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const renderItem = ({ item }) => (
      //let str = tem.senderi;
      //const new = item.sender.substring(0, 1);//you can type any amount of length you want
      
           <List.Item
      title={item.sender}
      description={item.created_at}
      onPress={()=>{navigation.navigate('View Message',{
        'id':item.id,
        "sender":item.sender,
        'receiver':item.receiver,
        'message':item.message,
        'created_at':item.created_at
      })}}
      left={props =>  <Avatar.Text size={50} label={item.sender.substring(0, 1)} />}
      right={props => <List.Icon {...props} icon="shield-star-outline" />}
    />
      
    ); 

    if(!isLoading){
      return (
        <View>
        
            <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="My Inbox" subtitle="My Messages" />
            
          </Appbar.Header>
        
        <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
        
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
      <Text >We are fetching your updated messages</Text>
      </View>


</View>
      );
    }


}
