import { Header } from "@rneui/base";
import { Input } from '@rneui/themed';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon } from 'react-native-elements';


export default class AlterContato extends React.Component{

    render() {

        return (

            <SafeAreaProvider>
        
        <Header
        barStyle="default"
        centerComponent={{
          text: "Alterar Contato",
          style: { color: "#fff" }
        }}
        
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              type="font-awesome"
              size={15}
              color="white"
            />
          }
          onPress={() => navigation.navigate('contatos')}

        />}
      />
        
        
            <View style={[styles.container]}>
        
              <View>
                <Text>Nome</Text>
                <Input value='Marco Andrade' inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
                <Text>Email</Text>
                <Input value='mand@gmail.com' inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
        
                <Text>Telefone</Text>
                <Input value='81 988553424' inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
        
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
                ></Button>
        
                <Button title='Excluir'
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
        
            </SafeAreaProvider>       
        
          )

    }

}

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