import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

function EquipeScreen({ navigation }) {
  useEffect(() => {
    Alert.alert(
      "Aviso!",
      "Esta página ainda esta em produção e não está pronta para ser visualizada.",
      [{ text: "OK" , onPress: () => navigation.goBack()}]
    );
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Equipe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EquipeScreen;
