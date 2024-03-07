import { Header } from "@rneui/base";
import { Button, Input } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";


export default class AlterContato extends React.Component{

    render() {

        return (

            <SafeAreaProvider>
        
            <Header
              backgroundImageStyle={{}}
              barStyle="default"
              centerComponent={{
                text: "Contato",
                style: { color: "#fff" }
              }}
              centerContainerStyle={{}}
              containerStyle={{ width: "100%" }}
              leftComponent={{
                icon: "arrow-back",
                color: "#fff"
              }}
              leftContainerStyle={{}}
              linearGradientProps={{}}
              placement="center"
              rightContainerStyle={{}}
              statusBarProps={{}}
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