import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  GetStarted,
  Login,
  Registered,
  MainApp,
  Messages,
  Hospitals,
} from '../page';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={MainApp} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registered"
        component={Registered}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
