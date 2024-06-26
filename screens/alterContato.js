import { Header } from "@rneui/base";
import { Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon } from 'react-native-elements';

export default class AlterContato extends React.Component {

  render() {
    const { route, navigation } = this.props;
    const { nome, tel } = route.params || {}; // Defina nome e tel como objetos vazios por padrão

    return (
      <SafeAreaProvider>
        <Header
          barStyle="default"
          centerComponent={{
            text: "Alterar Contato",
            style: { color: "#fff" }
          }}
          leftComponent={<Button
            icon={<Icon
              name="arrow-left"
              type="font-awesome"
              size={15}
              color="white"
            />}
            onPress={() => navigation.navigate('contatos')}
          />}
        />
        <View style={styles.container}>
          <View>
            <Text>Nome</Text>
            <Input value={nome} inputStyle={{ border: '1px solid', backgroundColor: 'white' }} />
            <Text>Email</Text>
            <Input value='mand@gmail.com' inputStyle={{ border: '1px solid', backgroundColor: 'white' }} />
            <Text>Telefone</Text>
            <Input value={tel} inputStyle={{ border: '1px solid', backgroundColor: 'white' }} />
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
              onPress={() => navigation.navigate('contatos', { nome: nome, tel: tel })}
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
              onPress={() => navigation.navigate('contatos')}
            />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});