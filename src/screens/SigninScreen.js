import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    
    useEffect(()=>{
        const clearErr = navigation.addListener('blur', () => {
            clearErrorMessage();
        });
        return clearErr;
    }, [navigation]);
    
    return (
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sing In"
        />
        <NavLink text="Dont have an account? Sign up instead" name="Signup" />
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

export default SigninScreen;