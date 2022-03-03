import { View, Text } from 'react-native'
import {React, useState} from 'react'
import CalendarPicker from 'react-native-calendar-picker';

import { Appbar, TextInput, Card, Title, Paragraph ,Button ,Snackbar } from 'react-native-paper';
export default function AdminDashboard({navigation}) {

    const _goBack = () => navigation.goBack();

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    const [text, setText] = useState("");
    const onDismissSnackBar = () => setSUccess(false);
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [success, setSUccess] = useState(false);

    const [selectedStartDate, setSelectedData] = useState('');
    const onDateChange = (date) =>{
        setSelectedData(date);
    }
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return (
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
      value={text}
      mode={"outlined"}
      onChangeText={text => setText(text)}
    />
    {/* start of date picker */}

    <CalendarPicker
          onDateChange={onDateChange}
        />
          <Paragraph>SELECTED DATE:{ startDate }</Paragraph>


    {/* end of date picker */}
    </Card.Content>
  </Card>

  <Button icon="pen" mode='outlined' onPress={() => setSUccess(true)}>
  Publish Meeting notice 
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
        Youve successfully published the meeting notice to all staff!
      </Snackbar>
  

    {/* end of meeting card */}
    </View>
  )
}