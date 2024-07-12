import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from 'axios';

const Contatos = () => {
  const [listaContatos, setListaContatos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/agenda')
      .then(response => {
        setListaContatos(response.data);
        console.log('Resposta recebida');
      }).catch(error => {
        console.log('Erro na requisição', error);
      });
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Lista de Contatos",
          style: { color: "#fff" }
        }}
        rightComponent={
          <Button
            icon={
              <Icon
                name="plus"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            onPress={() => navigation.navigate('CadContato')}
          />
        }
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
      <View style={styles.container}>
        {listaContatos.map(contato => (
          <TouchableOpacity 
            key={contato.id} 
            onPress={() => navigation.navigate('AlterContato', { 
              id: contato.id, 
              nome: contato.nome, 
              tel: contato.numero, 
              email: contato.email 
            })} 
            style={styles.contato}
          >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.nome}>{contato.nome}</Text>
              <Text style={styles.telefone}>{contato.numero}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  telefone: {
    fontSize: 16,
  },
  divisao: {
    backgroundColor: 'gray',
    height: 8,
    width: '100%',
    borderRadius: 50,
  },
});

export default Contatos;
