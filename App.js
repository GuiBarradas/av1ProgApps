import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const API_URL = 'http://192.168.0.15:3000'; // Endereço do servidor JSON

// Tela de Login
function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [setTimeoutId, setSetTimeoutId] = useState(null);

  const handleLoginPress = async () => {
    try {
      const response = await axios.post(`${API_URL}/usuarios/login`, { email, password });

      if (response.status === 200) {
        navigation.navigate('TelaConteudo');
      } else {
        setAlertTitle('Credenciais inválidas');
        setAlertMessage('');
        setModalVisible(true);
        const id = setTimeout(() => {
          setModalVisible(false);
        }, 5000);
        setSetTimeoutId(id);
      }
    } catch (error) {
      console.error(error);
      setAlertTitle('Erro');
      setAlertMessage('Algo deu errado. Por favor, tente novamente.');
      setModalVisible(true);
      const id = setTimeout(() => {
        setModalVisible(false);
      }, 5000);
      setSetTimeoutId(id);
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.alertTitle}>{alertTitle}</Text>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Tela de Cadastro
function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [setTimeoutId, setSetTimeoutId] = useState(null);

  const handleCadastroPress = async () => {
    try {
      if (email && password) {
        const response = await axios.post(`${API_URL}/usuarios`, { email, password });

        if (response.status === 201) {
          setAlertTitle('Sucesso');
          setAlertMessage('Cadastro efetuado com sucesso');
          setModalVisible(true);
          const id = setTimeout(() => {
            setModalVisible(false);
            navigation.navigate('TelaLogin');
          }, 5000);
          setSetTimeoutId(id);
        } else {
          setAlertTitle('Erro');
          setAlertMessage('Não foi possível cadastrar o usuário');
          setModalVisible(true);
          const id = setTimeout(() => {
            setModalVisible(false);
          }, 5000);
          setSetTimeoutId(id);
        }
      } else {
        setAlertTitle('Erro');
        setAlertMessage('Preencha todos os campos');
        setModalVisible(true);
        const id = setTimeout(() => {
          setModalVisible(false);
        }, 5000);
        setSetTimeoutId(id);
      }
    } catch (error) {
      console.error(error);
      setAlertTitle('Erro');
      setAlertMessage('Algo deu errado. Por favor, tente novamente.');
      setModalVisible(true);
      const id = setTimeout(() => {
        setModalVisible(false);
      }, 5000);
      setSetTimeoutId(id);
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('TelaLogin');
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Voltar para o Login</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.alertTitle}>{alertTitle}</Text>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    borderColor: 'purple',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});
