import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import { Button, Input } from '@rneui/themed';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from 'react-native-elements';
const cadUser = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaProvider>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Usuário",
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
          onPress={() => navigation.navigate('login')}

        />}
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

export default cadUser; 