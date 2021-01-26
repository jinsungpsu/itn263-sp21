/*
This is a simple to do app
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Here's the default component from App.js

export default function App() {
  return (
    <View>
      <Text>My Fancy To Do List</Text>
      <ToDoList />
    </View>
  );
}

const ToDoList = () => {
  return (
    <View>
      <ToDoItem title="Laundry" priority="high" />
      <ToDoItem title="cook dinner" priority="high" />
      <ToDoItem title="clean bathroom" priority="medium"/>
      <ToDoItem title="homework" priority="low"/>
    </View>
  );
}

const ToDoItem = (props) => {
  return (
    // this still works
    <View style={styles.toDoItem}>
      {/* this does not work */}
      <Text>To do: </Text>
      <Text>{props.title} Priority: {props.priority}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    backgroundColor: '#001769',
    color: '#ffffff',
  },
});
