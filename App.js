import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather,AntDesign} from '@expo/vector-icons'; 
import ScanQR from "./Screens/ScanQR"
import ContactDoc from './Screens/ContactDoc';
import DashBoard from './Screens/DashBoard';




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashBoard} options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}/>
        <Tab.Screen name="Scan QR" component={ScanQR} options={{
          tabBarLabel: 'Scan QR',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="scan1" size={24} color="black" />
          ),
        }}/>
      <Tab.Screen name="Contact Doctor" component={ContactDoc} options={{
          tabBarLabel: 'Contact Doctor',
          tabBarIcon: ({ color, size }) => (
            <Feather name="phone-call" size={20} color="black" />
          ),
        }}/>
    </Tab.Navigator>
  );
}
//test
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}