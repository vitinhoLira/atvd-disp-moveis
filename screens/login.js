import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import { Image, StyleSheet, Text, View } from 'react-native';
import { auth } from '../services/fireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('logado');
        // Navegar para a tela de contatos após o login bem-sucedido
        navigation.navigate('contatos');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.login}>
      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View>
        <Text>Entrar</Text>
        <Input
          inputStyle={{
            border: '1px solid',
            backgroundColor: 'white'
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Senha</Text>
        <Input
          inputStyle={{
            border: '1px solid',
            backgroundColor: 'white'
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <Button
          title='Login'
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#4B88FA',
            borderRadius: 0,
            margin: 5,
            width: '206px'
          }}
          onPress={handleLogin}
        />
      </View>
      <View style={styles.cadastrar}>
        <Button
          title='Cadastre-se'
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#FA281E',
            borderRadius: 0,
            margin: 0,
            width: '206px'
          }}
          onPress={() => navigation.navigate('cadUser')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAE2CD',
  },
  cadastrar: {
    marginTop: 20,
  }
});

export default Login;
