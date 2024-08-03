import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

function PontosScreen({ navigation }) {
  useEffect(() => {
    Alert.alert(
      "Aviso!",
      "Esta página ainda esta em produção e não está pronta para ser visualizada.",
      [{ text: "OK" , onPress: () => navigation.goBack()}]
    );
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Pontos de coletas</Text>
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

export default PontosScreen;
