import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button, Input } from '@rneui/themed'
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class cadUser extends React.Component{


    render() {

        return (

            <SafeAreaProvider>
        
              <Header
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                  text: "Usuário",
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
              <View style={[styles.cadUser]}>
                <View>
        
                  <Text>Nome</Text>
                  <Input inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
                  <Text>cpf</Text>
                  <Input inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
        
                  <Text>email</Text>
                  <Input inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
        
                  <Text>senha</Text>
                  <Input inputStyle={{
                    border: '1px solid',
                    backgroundColor: 'white'
                  }} />
        
                  <Button>Salvar</Button>
        
                </View>
              </View>
        
            </SafeAreaProvider>
        
        )
        

    }


}