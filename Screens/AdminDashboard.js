import { View, Text } from 'react-native'
import {React, useState} from 'react'
import CalendarPicker from 'react-native-calendar-picker';
import {BASE_URI} from '../BASE_URI'
import axios from 'axios'
import { Appbar, TextInput, Card, Title, Paragraph ,Button ,Snackbar } from 'react-native-paper';
export default function AdminDashboard({navigation}) {

    const _goBack = () => navigation.goBack();

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const onDismissSnackBar = () => setSUccess(false);
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [success, setSUccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [selectedStartDate, setSelectedData] = useState('');
    const onDateChange = (date) =>{
        setSelectedData(date);
    }
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const sendmessage = () => {
      setLoading(true);
      axios.post(BASE_URI+'/add/meeting',
        {
          title:text,
          description:text2,
          time:startDate
      
      }
      )
      .then((response)=>{
        setLoading(false);
        if(response.data.success == true){
          setsuccessMessage('Youve successfully published the meeting notice to all staff!')
          setSUccess(true);
          
        }else{
          setsuccessMessage('A problem Occured while we were working on the processing! Try again later')
          setSUccess(true);
          
        }

      })
       

    }
  
    if (loading){
      return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
        <Text>Loading...</Text>
      </View>
      );
  

    }else{
      return(
        <View>
        {/* start of appbar */}
       <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Administration Panel" subtitle="Management module" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    {/* end of appbar */}

    {/* card */}

    <Card>
    <Card.Content>
      <Title>Schedule a meeting</Title>
      <Paragraph>Kindly make sure the details you provide are correct, this information will immediately be available on the staff module immediately it is published.</Paragraph>
      <TextInput
      label="Meeting Title"
      value={text}
      mode={"outlined"}
      onChangeText={text => setText(text)}
    />
         <TextInput
      label="Meeting Description"
      value={text2}
      mode={"outlined"}
      onChangeText={text => setText2(text)}
    />
    {/* start of date picker */}

    <CalendarPicker
          onDateChange={onDateChange}
        />
          <Paragraph>SELECTED DATE:{ startDate }</Paragraph>


    {/* end of date picker */}
    </Card.Content>
  </Card>

  <Button icon="pen" mode='outlined' onPress={sendmessage}>
  Publish Meeting notice 
  </Button>

  <Button icon="pen" mode='outlined' onPress={ ()=>{navigation.navigate('Scan')} }>
      Attend shift
  </Button>
  <Button icon="pen" mode='outlined' onPress={ ()=>{navigation.navigate('AssignTask')} }>
      Schedule tasks
  </Button>
  <Button icon="pen" mode='outlined' onPress={ ()=>{navigation.navigate('Notice')} }>
      Daily Occurence Sheet
  </Button>
  <Snackbar
        visible={success}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'got it',
          onPress: () => {
            // Do something
          },
        }}>
        {successMessage}
      </Snackbar>
      {/* Youve successfully published the meeting notice to all staff! */}
  

    {/* end of meeting card */}
    </View>
      );
    }
   
  
}