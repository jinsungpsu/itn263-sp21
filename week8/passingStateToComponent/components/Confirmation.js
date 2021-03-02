import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Confirmation = (props) => {
  return (
    <Text>Cool beans! {props.name}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Confirmation;