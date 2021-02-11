/*
This is a simple to do app
*/
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <ToDoItem title="Laundry"  />
      <ToDoItem title="cook dinner"  />
      <ToDoItem title="clean bathroom" />
      <ToDoItem title="homework" />
    </View>
  );
}

const ToDoItem = (props) => {
  const [priority, setPriority] = useState('medium');
  const [numItems, setNumItems] = useState(0);

  function changeToHigh() {
    setPriority('high');
  }
  function addItem() {
    setNumItems(numItems + 1);
  }

  return (
    // this still works
    <View style={styles.toDoItem}>
      {/* this does not work */}
      <Text>To do: </Text>
      <Text style>{props.title} Priority: {priority} NumItems: {numItems}</Text>
      <Button title="Make high"
        onPress={changeToHigh}
      />
      <Button title="Add one"
        onPress={addItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
  },
});
