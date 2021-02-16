import "../_mockLocations";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ navigation }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [isFocused, setIsFocused] = useState(true);
  const [err] = useLocation(isFocused, callback);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setIsFocused(false);
    });

    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(true);
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </View>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
