import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track List Screen</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
