import {React, useEffect, useState} from 'react';
import { Appbar,Avatar, ActivityIndicator, Text, Paragraph, Colors, List} from 'react-native-paper';
import {View, Dimensions ,FlatList} from 'react-native';


export default function AvailableDoctors({navigation}) {

  let data= [];
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState(data);
  useEffect(() => {
   // DATA = [];
      //using a fake rest api, will replace with the voters api when done
      fetch('https://consultancy-api.herokuapp.com/api/available/doctors')
      .then(response => response.json())
      .then(
        function (response){
         console.log(response.response);
          response.response.forEach(element => {
            
            data.push(element);
           // setListData(data);
            setIsLoading(false);
           //console.log(data);
          });
        }
          );
         
          
      } );
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

    if(!isLoading){
      return (
        <View>
        
            <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Available Doctors" subtitle="My personalized doctors list" />
            
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
      <Text >We are personalizing your experience</Text>
      </View>


</View>
      );
    }


}
