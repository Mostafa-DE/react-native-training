import React from 'react';
import {ImageBackground, Text, StyleSheet, View, Button} from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../imgs/background.jpg')}>
      <View style={styles.logoContainer}>
        <Button title=""></Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bakground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#333',
  },
});

export default WelcomeScreen;
