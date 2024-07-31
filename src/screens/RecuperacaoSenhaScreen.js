import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RecuperacaoSenhaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>
      <Text style={styles.subTitle}>Insira o seu e-mail para recuperar a senha</Text>
      {/* Adicione aqui os campos e botões necessários para a recuperação de senha */}
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

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    paddingTop: 60,
    textAlign: 'left',
  },

  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    padding: 10,
    textAlign: 'left',
  },
});

export default RecuperacaoSenhaScreen;
