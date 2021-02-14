import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
