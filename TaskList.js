// TaskList.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TaskList = ({ tasks, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  task: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default TaskList;
