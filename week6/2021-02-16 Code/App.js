import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView, Button, StyleSheet, Text, View, TextInput, Modal, Image, TouchableHighlight } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [name, setName] = useState('Enter Name Here');
  const [modalShown, setModalShown] = useState(false);

  const nameBtnHandler = () => {
    setName("John Doe");
    console.log("button handler! value of name is changed to: " + name);
    alert("button handler! value of name is changed to: " + name);
    setModalShown(true);
  }


  return (
    <SafeAreaProvider style={styles.container}>
      
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ITN263 Week 6', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Name: {name}</Text>
        <Button title="John Doe" onPress={nameBtnHandler} />
        <TouchableHighlight
         onPress={() => setName('pizza')}
         onLongPress={() => setName("You sure you want pizza?")} >
          <Image
            source={require('./assets/pizza.jpg')}
            style={styles.image}
          />
        </TouchableHighlight>
        <Image
          source={require('./assets/bread.jpg')}
          style={styles.image}
        />
        <StatusBar style="auto" />

        <Modal
          onRequestClose={() => setModalShown(false)}
          visible={modalShown}
        >
          <Text>Current name state set to: {name}</Text>
          <Button title="Close" onPress={()=>setModalShown(false)} />
        </Modal>

      </ScrollView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 500,
    height: 500,
  }
});

export default App;
