import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca para ícones

function CadastroScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true); // Estado para visibilidade das senhas

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry); // Alterna a visibilidade das senhas
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subTitle}>Insira os detalhes da sua conta</Text>

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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={secureTextEntry ? 'visibility-off' : 'visibility'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={secureTextEntry ? 'visibility-off' : 'visibility'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cadastroButton}  >
          <Text style={styles.cadastroButtonText}>Inscrever-se</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.googleButton}>
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
    color: '#091133',
    fontSize: 50,
    paddingTop: 60,
    textAlign: 'left',
    paddingBottom: '5%',
  },

  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    paddingBottom: 20,
    textAlign: 'left',
    paddingBottom: '12%',
  },

  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 16,
    color: '#000',
    paddingRight: 40, // Espaço para o ícone de visibilidade da senha
  },

  passwordContainer: {
    position: 'relative',
    marginBottom: 30,
  },

  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 8,
  },

  googleButton: {
    marginTop: 20,
    width: '70%', // Ajusta o botão para ocupar 70% da largura do contêiner
    height: 50, // Ajuste a altura conforme necessário
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Alinha o conteúdo horizontalmente
    alignSelf: 'center',
  },

  googleButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  cadastroButton: {
    backgroundColor: '#C40F0F',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%', // Ajusta a largura do botão
    height: 50,
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },

  cadastroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default CadastroScreen;
