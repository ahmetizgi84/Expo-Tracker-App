//import "../_mockLocations";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, // saniyede 1 günceleme yap
          distanceInterval: 10, // 10 metrede bir güncelleme yap
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
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
