import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

function LoginScreen({ navigation }) {
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

        <TouchableOpacity style={styles.loginButton} onPress={() => alert('Entrar')}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.createAccountText}>Não tem uma conta?</Text>

        <TouchableOpacity style={styles.inscreverButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.loginButtonText}>Inscrever-se</Text>
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
    width: '70%', // Ajusta o botão para ocupar toda a largura disponível
    height: '8%', // Ajuste a altura conforme necessário
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'flex-start', 
  },

  googleButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  loginButton: {
    backgroundColor: '#C40F0F',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: '8%'
  },
  
  inscreverButton: {
    backgroundColor: '#333437',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '50%',
    height: '8%'

  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },

  createAccountText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginTop: 20,
  },
});

export default LoginScreen;
