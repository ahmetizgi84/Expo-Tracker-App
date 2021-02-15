import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <View>
      <Spacer>
        <Input placeholder="Enter Track Name" />
      </Spacer>
      <Button title="Start Recording" />
    </View>
  );
};

export default TrackForm;
