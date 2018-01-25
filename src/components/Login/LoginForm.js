import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username or password"
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus() }
          keyboardType='email-address'
          autoCapitalize='none'
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          returnKeyType='go'
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#FFF77B',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15
  }
});
