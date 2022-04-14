import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';

import PatientDashboard from './Screens/BottomNav/PatientDashboard';
import Appointment from './Screens/Appointment'
import ViewMessage from './Screens/ViewMessage'
import AdminLogin from './Screens/AdminLogin'
import AdminDashboard from './Screens/AdminDashboard'
import ScanQR from './Screens/scanQR';
import { Provider } from 'react-native-paper';
import AssignTask from './Screens/AssignTask';
import ScheduledTasks from './Screens/ScheduledTasks';
import Notice from './Screens/Notice';
import Occurence from './Screens/Occurences';
import Meeting from './Screens/Meetings';
import SignUp from './Screens/create_account';
import DetailsSheduledTasks from './Screens/DetailsSheduledTasks';
import MeetingView from './Screens/meeetingView';


export default function App() {
  const Stack2 = createNativeStackNavigator();
  return (
    <Provider>
   
      <NavigationContainer>
        <Stack2.Navigator initialRouteName="Login">
          <Stack2.Screen name="Login" component={Login} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Patient Dashboard" component={PatientDashboard} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Appointment" component={Appointment} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="View Message" component={ViewMessage} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Admin Login" component={AdminLogin} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Admin Dashboard" component={AdminDashboard} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Sign up" component={SignUp} options={{ headerShown: false, headerTitleAlign: "center" }} />
          
          <Stack2.Screen name="Scan" component={ScanQR} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="AssignTask" component={AssignTask} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="ScheduledTasks" component={ScheduledTasks} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Notice" component={Notice} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Occurence" component={Occurence} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Meeting" component={Meeting} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="DetailsScheduledTasks" component={DetailsSheduledTasks} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="MeetingView" component={MeetingView} options={{ headerShown: false, headerTitleAlign: "center" }} />
          
           </Stack2.Navigator>
      </NavigationContainer>
      </Provider>
    
  );
}
