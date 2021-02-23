import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ButtonGroup } from 'react-native-elements';
import ScrollPicker from 'react-native-wheel-scroll-picker';


const Survey = () => {
  const [name, setName] = useState("Enter name here");

  const submitHandler = () => {
    let output = '';
    if (name == "Johnny") {
      output += "Welcome back Johnny!";
    }
    alert(output + " Name: " + name);
    setName('Enter name here');
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <KeyboardAvoidingView behavior='padding' >
        <Image source={require('./assets/bread.jpg')} style={styles.breadImg} />
        <Text>Text Input:</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}>
        </TextInput>
        <Button
          onPress={submitHandler}
          title="Submit"
        />
      </KeyboardAvoidingView>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breadImg: {
    height: 500,
    width: 500,
  },
});

export default Survey;