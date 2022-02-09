import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import PatientDashboard from './Screens/BottomNav/PatientDashboard';
import Appointment from './Screens/Appointment'
import ViewMessage from './Screens/ViewMessage'


export default function App() {
  const Stack2 = createNativeStackNavigator();
  return (
   
      <NavigationContainer>
        <Stack2.Navigator initialRouteName="Login">
          <Stack2.Screen name="Login" component={Login} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Patient Dashboard" component={PatientDashboard} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="Appointment" component={Appointment} options={{ headerShown: false, headerTitleAlign: "center" }} />
          <Stack2.Screen name="View Message" component={ViewMessage} options={{ headerShown: false, headerTitleAlign: "center" }} />
          
          
        </Stack2.Navigator>
      </NavigationContainer>
    
  );
}
