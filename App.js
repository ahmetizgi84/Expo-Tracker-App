import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";

import { navigationRef } from "./src/navigationRef";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Signup"
            headerMode="none"
            screenOptions={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
              headerShown: false,
            }}
          >
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />

            <Stack.Screen name="MainFlow" component={MainFlow} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;

function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackFlow" component={TrackListAndDetailFlow} />
      <Tab.Screen name="Create" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function TrackListAndDetailFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={TrackListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}
