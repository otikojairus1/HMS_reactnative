import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React,{useState} from 'react'

import {BASE_URI} from '../BASE_URI'
import { Appbar, TextInput, List , FAB, Card, Title, Paragraph ,Button ,Snackbar } from 'react-native-paper';
import axios from 'axios';

export default function Meeting({navigation}) {
   const[data2,setData2] =useState([]);
   const[loading,setLoading] =useState(true);
    const _goBack = () => navigation.goBack();

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
   
    const [meetingList, setMeetinglist] = React.useState([]);
   
    React.useEffect(()=> {
      
      axios.get(BASE_URI+'/schedules')
      .then((response)=>{
       // console.log(response.data.data);
        setData2(response.data.data);
        //setMeetinglist(data);
        console.log(data2);
      })

    },[])

    

  return (
    <View>
              {/* start of appbar */}
              <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Scheduled Tasks" subtitle="Todays schedules" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    {/* end of appbar */}
    {/* start of list */}

  
{/* 

<FlatList
        data={data2}
        renderItem={({ item }) => 
        <List.Item
            title={item.Title}
            description={item.Description}
            left={props => <List.Icon {...props} icon="folder" />}
          />}
        keyExtractor={item => item.id}
      /> */}

      {data2.map((item)=>{
        return (
          <TouchableOpacity onPress={()=>{navigation.navigate('DetailsScheduledTasks', {
            "id": item.id,
            "time": item.time,
            "description": item.description,
            "operator": item.operator,
            "careplan": item.careplan,
            "title": item.title,
            "created_at": item.created_at,
            "updated_at": item.updated_at
          })}}>
          <List.Item
            title={item.title}
            description={item.description}
            left={props => <List.Icon {...props} icon="folder" />}
          />
          </TouchableOpacity>

        );
      })}

    {/* end of list */}
    </View>
  )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      top: 700,
      backgroundColor:"blue"
    },
  })