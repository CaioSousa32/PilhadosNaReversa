import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Insira os detalhes da sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
          keyboardType="numeric"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
        
        <TouchableOpacity onPress={() => navigation.navigate('RecuperacaoSenha')}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={() => alert('Entrar com Google')}>
          <Image 
            source={require('../../assets/google.png')} 
            style={styles.googleButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC0C0',
  },

  content: {
    width: '80%',
  },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 50,
    paddingTop: 60,
    textAlign: 'left',
  },

  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    padding: 10,
    textAlign: 'left',
  },

  input: {
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 16,
    color: '#000',
  },

  forgotPasswordText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginTop: 10,
  },

  googleButton: {
    marginTop: 20,
  },

  googleButtonImage: {
    width: 200, // Ajuste conforme necessário
    height: 50, // Ajuste conforme necessário
    resizeMode: 'contain',
  },
});

export default HomeScreen;
