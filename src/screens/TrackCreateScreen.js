import "../_mockLocations";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect } from "@react-navigation/native";

const TrackCreateScreen = ({ navigation }) => {
  const { addLocation } = useContext(LocationContext);
  const [isFocused, setIsFocused] = useState(true);
  const [err] = useLocation(isFocused, addLocation);

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
    <View>
      <Text> create map screen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
