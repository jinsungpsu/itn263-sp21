import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { CatList } from './components/CatList';

const PetList = () => {
  return (

    <View>
      <CatList />
      {/*
      <DogList />
      <BirdList />
      */}
    </View>
  );
}

const PetFinder = () => {
  return (
    <View style={styles.PetFinderView}>
      <Text style={styles.titleBar}>Welcome to PetFinder</Text>
      <PetList />
    </View>
  );
}

const styles = StyleSheet.create({
  PetFinderView: {
    backgroundColor: '#aaa',
  },
  titleBar: {
    backgroundColor: 'green',
    marginTop: 20,
  }
});

export default PetFinder;
