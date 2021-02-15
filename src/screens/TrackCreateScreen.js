import "../_mockLocations";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
