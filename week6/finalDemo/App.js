import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView, Button, StyleSheet, Text, View, TextInput, Modal, Image } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Image
          source={require('./assets/pizza.jpg')}
          style={styles.image}
        />
        <ModalTest />
        <TextInputTest />
        <StatusBar style="auto" />

      </ScrollView>
    </SafeAreaProvider>
  );
}

const TextInputTest = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <Text>{value}</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </KeyboardAvoidingView>
    </View>
  );

}

const ModalTest = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title="show modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <Card>
            <Card.Title>A modal!</Card.Title>
            <Card.Divider />
            <Card.Image source={require('./assets/snow.jpg')}>
              <Text style={{ marginBottom: 10 }}>
                A Card in a modal!
              </Text>
            </Card.Image>
            <Button
              title="close modal!"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </Card>
        </View>
      </Modal>
    </View>

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
