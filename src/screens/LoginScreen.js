import React, { useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Adicione o MaterialIcons para ícones de visibilidade

function LoginScreen({ navigation }) {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry); // Alterna a visibilidade da senha
  };

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

        <TouchableOpacity onPress={() => navigation.navigate('RecuperacaoSenha')}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={() => Alert.alert(
          "Aviso!",
          "Esta página ainda esta em produção e não está pronta para ser visualizada.",)}>
          <Image 
            source={require('../../assets/google.png')} 
            style={styles.googleButtonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => Alert.alert(
          "Aviso!",
          "Esta página ainda esta em produção e não está pronta para ser visualizada.",)}>
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
    height: 40,
    borderBottomColor: '#816161',
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

  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginTop: 10,
  },

  googleButton: {
    marginTop: 20,
    width: '70%', // Ajusta o botão para ocupar 70% da largura do contêiner
    height: 50, // Ajuste a altura conforme necessário
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Alinha o conteúdo horizontalmente
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
    width: '100%', // Ajusta a largura do botão
    height: 50,
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },
  
  inscreverButton: {
    backgroundColor: '#333437',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '80%', // Ajusta a largura do botão
    height: 50,
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },

  createAccountText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginTop: 20,
  },
});

export default LoginScreen;
