import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen() {
  const [username, setUsername] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Insira os detalhes da sua conta</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome do Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Login no Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinha itens à esquerda
    padding: 16,
    backgroundColor: '#FEC0C0',
  },
  header: {
    width: '100%',
    marginBottom: 24,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 16,
    color: '#000',
  },
  forgotPassword: {
    marginTop: 12,
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#4285F4',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 24,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
