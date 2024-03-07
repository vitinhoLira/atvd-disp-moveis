import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button, Input } from '@rneui/themed'
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class Login extends React.Component{

    render() {
        return (

            <View style={[styles.login]}>
            <View>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
                style={{ width: 100, height: 100 }} // Defina o tamanho desejado da imagem
              />
            </View>
      
            <View >
              <Text>Entrar</Text>
              <Input inputStyle={{
                border: '1px solid',
                backgroundColor: 'white'
              }} />
              <Text>Senha</Text>
              <Input inputStyle={{
                border: '1px solid',
                backgroundColor: 'white'
              }} />
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
                onPress={()=> this.props.navigation.navigate('Contatos')}
              ></Button>
            </View>
      
            <View style={[styles.cadastrar]}>
              <Button title='Cadastre-se'
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: '#FA281E',
                  borderRadius: 0,
                  margin: 0,
                  width: '206px'
                }} />
            </View>
          </View>

        )

            

        
    }

}

const styles = StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAE2CD',
    },
    cadUser: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
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
      borderRadius: '50px'
  
  
    }
  });