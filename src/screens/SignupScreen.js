import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  useEffect(()=>{
    const clearErr = navigation.addListener('blur', () => {
        clearErrorMessage();
    });
    return clearErr;
}, [navigation]);

    return (
      <View style={styles.container}>
        <AuthForm headerText='Sign Up for Tracker' errorMessage={state.errorMessage} submitButtonText='Sign Up' onSubmit={signup} />
        <NavLink name='Signin' text='Already have an account? Sign in instead' />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignupScreen;