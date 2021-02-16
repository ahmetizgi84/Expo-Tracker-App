import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={styles.title}>Account Screen</Text>
      <Spacer />
      <Button title="Sign Out" onPress={signout} />
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
});
