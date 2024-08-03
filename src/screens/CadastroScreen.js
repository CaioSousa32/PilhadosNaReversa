import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CadastroScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true); // Estado para visibilidade das senhas
  const [isChecked, setIsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry); // Alterna a visibilidade das senhas
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = () => {
    if (!isChecked) {
      Alert.alert('Atenção', 'Você deve concordar com os termos de uso para prosseguir.');
      return;
    }
    Alert.alert(
      "Aviso!",
      "Esta página ainda esta em produção e não está pronta para ser visualizada."
    );
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
          placeholderTextColor="#816161"
        />
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
          keyboardType="numeric"
          placeholderTextColor="#816161"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#816161"
          />
          <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
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
            placeholderTextColor="#816161"
          />
          <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
            <Icon
              name={secureTextEntry ? 'visibility-off' : 'visibility'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkbox}>
            <Icon
              name={isChecked ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Concordo com os termos de uso do app.</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.cadastroButton,
            { backgroundColor: isChecked ? '#C40F0F' : '#E16A6A' } // Cor do botão dependendo do estado do checkbox
          ]}
          onPress={handleRegister}
          disabled={!isChecked} // Botão desativado se o checkbox não estiver marcado
        >
          <Text style={styles.cadastroButtonText}>Inscrever-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => Alert.alert(
            "Aviso!",
            "Esta página ainda esta em produção e não está pronta para ser visualizada."
          )}
        >
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
    borderBottomColor: '#816161',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 16,
    color: '#000',
    paddingRight: 40,
    marginBottom:40,
  },

  passwordContainer: {
    position: 'relative',
  },

  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 8,
  },

  googleButton: {
    marginTop: 20,
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  googleButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  cadastroButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',
  },

  cadastroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  checkbox: {
    marginRight: 5,
    marginBottom: 5,
  },

  checkboxText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
});

export default CadastroScreen;
