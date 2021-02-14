import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components//AuthForm";
import NavLink from "../components/NavLink";
import { useFocusEffect } from "@react-navigation/native";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        //onSubmit={({ email, password }) => signup({ email, password })}
        onSubmit={signup}
      />

      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
