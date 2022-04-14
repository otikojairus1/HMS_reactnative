import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Meeting from '../Meetings';
import Notice from '../Notice';
import Occurence from '../Occurences';
import App from '../scanQR';
import ScheduledTasks from '../ScheduledTasks';
import Appointments from './Appointments';
import AvailableDoctors from './AvailableDoctors';
import InboxMain from './Inbox';


const PatientDashboard = ({navigation}) => {

    const appointment = () => <Notice  navigation={navigation} />;

    const Doctors = () => <ScheduledTasks navigation={navigation}/>;
    
    const Inbox = () => <Meeting navigation={navigation} />;

    const Shift = () => <App navigation={navigation} />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'doctors', title: 'Schedules', icon: 'doctor' },
    { key: 'messages', title: 'Meetings', icon: 'android-messages' },
    { key: 'appointment', title: 'Occurence', icon: 'book-account-outline' },
    { key: 'scheduleKey', title: 'Shift', icon: 'camera' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    doctors: Doctors,
    appointment: appointment,
    messages: Inbox,
    scheduleKey: Shift,
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