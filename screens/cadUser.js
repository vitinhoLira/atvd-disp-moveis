import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/fireBaseConfig';

const CadUser = () => { 
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCad = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use'){
        console.log('email já existe');
      }
      if (error.code === 'auth/invalid-email'){
        console.log('email invalido');
      }
    });
  };

  return (
    <SafeAreaProvider>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Usuário",
          style: { color: "#fff" }
        }}
        leftComponent={
          <Button
            icon={
              <Icon
                name="arrow-left"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            onPress={() => navigation.navigate('login')}
          />
        }
      />
      <View style={styles.cadUser}>
        <View>
          <Text>Email</Text>
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

          <Button onPress={handleCad}>Salvar</Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  cadUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CadUser;
