import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);

  const { _id } = route.params;

  const track = state.find((t) => t._id === _id);

  return (
    <View>
      <Text style={styles.text}> {track.name} </Text>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
  },
});
