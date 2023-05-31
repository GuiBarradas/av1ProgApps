import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function telaLogin({ navigation }) {
  const handleCadastroButton = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastroButton}>
        <Text style={styles.cadastroButtonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButton: {
    backgroundColor: '#7851a9',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  cadastroButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
