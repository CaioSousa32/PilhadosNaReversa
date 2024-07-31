import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PontosScreen() {
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
