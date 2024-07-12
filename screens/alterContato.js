import axios from 'axios';
import { Header } from "@rneui/base";
import { Input } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon } from 'react-native-elements';

const AlterContato = ({ route, navigation }) => {
  const { id, nome, tel, email } = route.params || {};

  const [nomeContato, setNomeContato] = useState(nome);
  const [telefoneContato, setTelefoneContato] = useState(tel);
  const [emailContato, setEmailContato] = useState(email);

  const handleSave = () => {
    try {
      if (!id) {
        console.error('ID do contato não definido');
        return;
      }

      const url = `http://localhost:3000/agenda/${id}`;
      console.log('URL para requisição PUT:', url);

       axios.put(url, {
        nome: nomeContato,
        numero: telefoneContato,
        email: emailContato
      });

      console.log('Contato alterado com sucesso');
      navigation.navigate('contatos');
      
    } catch (error) {
      console.error('Erro ao alterar contato', error);
    }
  };

  const handleDelete = () => {
    try {
      if (!id) {
        console.error('ID do contato não definido');
        return;
      }

      const url = `http://localhost:3000/agenda/${id}`;
      console.log('URL para requisição PUT:', url);

       axios.delete(url, {
        nome: nomeContato,
        numero: telefoneContato,
        email: emailContato
      });

      console.log('Contato excluído com sucesso');
      navigation.navigate('contatos');
      
    } catch (error) {
      console.error('Erro ao excluir contato', error);
    }
  };

  return (
    <SafeAreaProvider>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Alterar Contato",
          style: { color: "#fff" }
        }}
        leftComponent={
          <Button
            icon={<Icon name="arrow-left" type="font-awesome" size={15} color="white" />}
            onPress={() => navigation.navigate('contatos')}
          />
        }
      />
      <View style={styles.container}>
        <View>
          <Text>Nome</Text>
          <Input
            value={nomeContato}
            onChangeText={setNomeContato}
            inputStyle={{ border: '1px solid', backgroundColor: 'white' }}
          />
          <Text>Email</Text>
          <Input
            value={emailContato}
            onChangeText={setEmailContato}
            inputStyle={{ border: '1px solid', backgroundColor: 'white' }}
          />
          <Text>Telefone</Text>
          <Input
            value={telefoneContato}
            onChangeText={setTelefoneContato}
            inputStyle={{ border: '1px solid', backgroundColor: 'white' }}
          />
          <Button
            title='Alterar'
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#4B88FA',
              borderRadius: 0,
              margin: 5,
              width: '206px'
            }}
            onPress={handleSave} // Chama a função handleSave ao pressionar o botão
          />
          <Button
            title='Excluir'
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#FA281E',
              borderRadius: 0,
              margin: 0,
              width: '206px'
            }}
            onPress={handleDelete}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AlterContato;
