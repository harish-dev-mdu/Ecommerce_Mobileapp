import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card } from 'react-native-elements';

const CustomerSupportChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Simulate receiving messages from a "backend"
  useEffect(() => {
    const simulatedResponses = [
      { id: '1', text: 'Hi! How can I help you today?', sender: 'support' },
      { id: '2', text: 'I have an issue with my order.', sender: 'user' },
      { id: '3', text: 'Can you provide me with your order number?', sender: 'support' },
    ];
    setMessages(simulatedResponses);
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return; // Ignore empty messages

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate a response from support after a delay
    setTimeout(() => {
      const response = {
        id: Date.now().toString(),
        text: 'Thank you for your message. We are looking into your issue.',
        sender: 'support',
      };
      setMessages((prevMessages) => [...prevMessages, response]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.supportMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Customer Support Chat</Text>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            inverted // To show the latest message at the bottom
            contentContainerStyle={styles.messageList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type a message..."
              value={newMessage}
              onChangeText={setNewMessage}
              style={styles.input}
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageList: {
    paddingBottom: 20,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
  },
  supportMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
});

export default CustomerSupportChatScreen;
