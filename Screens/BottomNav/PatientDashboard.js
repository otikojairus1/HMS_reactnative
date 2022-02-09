import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Appointments from './Appointments';
import AvailableDoctors from './AvailableDoctors';
import InboxMain from './Inbox';


const PatientDashboard = ({navigation}) => {

    const appointment = () => <Appointments  navigation={navigation} />;

    const Doctors = () => <AvailableDoctors navigation={navigation}/>;
    
    const Inbox = () => <InboxMain navigation={navigation} />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'doctors', title: 'Available doctors', icon: 'doctor' },
    { key: 'messages', title: 'Inbox', icon: 'android-messages' },
    { key: 'appointment', title: 'My Appointments', icon: 'book-account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    doctors: Doctors,
    appointment: appointment,
    messages: Inbox,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default PatientDashboard;