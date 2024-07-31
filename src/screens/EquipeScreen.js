import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EquipeScreen() {
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
