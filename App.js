import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import telaLogin from './screens/telaLogin';
import telaCadastro from './screens/telaCadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={telaLogin} />
        <Stack.Screen name="Cadastro" component={telaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <View style={styles.mainBox}>
    //     <Text style={styles.loginTitleText}>Login</Text>
    //     <View style={styles.inputBox}>
    //       <Text style={styles.inputLabel}>Email</Text>
    //       <TextInput
    //         style={styles.input}
    //         autoCapitalize="none"
    //         keyboardType="email-address"
    //         textContentType="emailAddress"
    //       />
    //     </View>
    //     <View style={styles.inputBox}>
    //       <Text style={styles.inputLabel}>Senha</Text>
    //       <TextInput
    //         style={styles.input}
    //         autoCapitalize="none"
    //         secureTextEntry={true}
    //         textContentType="password"
    //       />
    //     </View>

    //     <TouchableOpacity style={styles.loginButton}>
    //       <Text style={styles.loginButtonText}>Login</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.cadastroButton}>
    //       <Text style={styles.cadastroButtonText}>Cadastro</Text>
    //     </TouchableOpacity>
    //       <Text style={styles.cadastroButtonText}>Cadastro</Text>

    //     <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  mainBox: {
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#7851a9',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16,
  },
});
