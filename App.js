import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

import { navigationRef, isReadyRef } from "./src/navigationRef";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                isReadyRef.current = true;
              }}
            >
              <Stack.Navigator
                //initialRouteName="Signup"
                headerMode="none"
                screenOptions={{
                  gestureEnabled: false,
                  ...TransitionPresets.SlideFromRightIOS,
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="ResolveAuth"
                  component={ResolveAuthScreen}
                />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Signin" component={SigninScreen} />

                <Stack.Screen name="MainFlow" component={MainFlow} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}

export default App;

function MainFlow() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="StackFlow"
        component={TrackListAndDetailFlow}
        options={{
          title: "Track List",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gears" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TrackListAndDetailFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="List"
        component={TrackListScreen}
        options={{ headerLeft: null, title: "Track List" }}
      />
      <Stack.Screen
        name="Detail"
        component={TrackDetailScreen}
        options={{ title: "Track Details" }}
      />
    </Stack.Navigator>
  );
}
