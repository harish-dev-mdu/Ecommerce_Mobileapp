// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle sending password reset email logic here
    alert(`Password reset instructions sent to Email ${email}`);
    navigation.navigate('SignupScreen'); // Navigate back to the SignupScreen or LoginScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to receive password reset instructions.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button title="Submit" color="#28a745" onPress={handleSubmit} />

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.backLink}>Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  backLink: {
    marginTop: 20,
    fontSize: 14,
    color: '#007bff',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
