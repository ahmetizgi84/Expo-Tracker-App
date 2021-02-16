import React, { useContext } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter Track Name"
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

export default TrackForm;
