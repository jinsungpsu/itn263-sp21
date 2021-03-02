import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Confirmation from './components/Confirmation';

const App = () => {
  const [name, setName] = useState('Johnny');
  return (
    <SafeAreaProvider style={styles.container}>

      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Confirmation name={name} />
      <Button onPress={()=>setName("Billy")} title="Change to Billy" />
      <Button onPress={()=>setName("Sally")} title="Change to Sally" />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default App;