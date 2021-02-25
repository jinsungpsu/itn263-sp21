import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, Image, KeyboardAvoidingView, Switch, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ButtonGroup } from 'react-native-elements';


const Survey = () => {
  const [name, setName] = useState("Enter name here");
  const [phone, setPhone] = useState("");
  const [isSub, setIsSub] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const subSwitch = () => setIsSub(previousState => !previousState);

  const buttons = ['Hello', 'World', 'Buttons']

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  }

  const submitHandler = () => {
    let output = '';
    if (name == "Johnny") {
      output += "Welcome back Johnny!";
    }
    if (isSub) {
      output += "Thanks for signing up for our newsletter...";
    }

    output+= " You've selected: " + buttons[selectedIndex];

    alert(output + " Name: " + name);
    setName('Enter name here');
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <KeyboardAvoidingView behavior='padding' >
        <ScrollView>

          <Image source={require('./assets/bread.jpg')} style={styles.breadImg} />
          <Text>Do you want to subscribe to our newsletter?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSub ? "#2a9666" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={subSwitch}
            value={isSub}
          />

          <Text>Text Input:</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}>
          </TextInput>

          <Text>Phone number:</Text>
          <TextInput
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            placeholder='123-456-7890'
            autoCompleteType='tel'
            keyboardType='phone-pad'
            clearButtonMode='always'
          >
          </TextInput>

          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
          />

          <Button
            onPress={submitHandler}
            title="Submit"
          />
        </ScrollView>
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
    width: 300,
  },
});

export default Survey;