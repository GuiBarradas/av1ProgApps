import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela de Login
function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
      navigation.navigate('TelaConteudo');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('TelaCadastro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <Text style={styles.loginTitleText}>Login</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastroPress}>
          <Text style={styles.cadastroButtonText}>Cadastro</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </View>
    </View>
  );
}

// Tela de Cadastro
function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastroPress = () => {
    if (email && password) {
      try {
        //salvar os dados localmente (simulando armazenamento)
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // alerta de cadastro
        Alert.alert('Cadastro efetuado com sucesso');
        navigation.navigate('TelaLogin');
      } catch (error) {
        console.log(error);
      }
    } else {
    //alerta de validaçao
      Alert.alert('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <Text style={styles.loginTitleText}>Cadastro</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastroPress}>
          <Text style={styles.cadastroButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Tela de Conteúdo
function TelaConteudo() {
  return (
    <View style={styles.container}>
      <Text style={styles.conteudoText}>Você está logado</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaConteudo" component={TelaConteudo} />
      </Stack.Navigator>
    </NavigationContainer>
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
  conteudoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
