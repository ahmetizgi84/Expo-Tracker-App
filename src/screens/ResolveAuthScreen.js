import React, { useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

export const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;

  // return (
  //   <View>
  //     <Text>Hey</Text>
  //   </View>
  // );
};

export default ResolveAuthScreen;
