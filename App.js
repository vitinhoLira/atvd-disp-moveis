import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button, Input } from '@rneui/themed'
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";


const login = () => {
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

const contatos = () => {
  return (

    <SafeAreaProvider >


        <Header

          barStyle="default"
          centerComponent={{
            text: "Lista de Contatos",
            style: { color: "#fff" }
          }}

          containerStyle={{ width: '100%' }}


          rightComponent={{ icon: "add", color: "#fff" }}

        />

        <View style={[styles.contatos]}>

          <View style={[styles.dados]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
              style={{ width: 100, height: 100, padding: '0px', margin: '0px'}}
            />
          </View>

          <View style={[styles.dados]}>
              <Text>Marcos Andrade</Text>
              <Text>81 988553424</Text>
            </View>

          <View style={[styles.dados]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
              style={{ width: 100, height: 100, padding: '0px', margin: '0px'}}
            />

          </View>

          <View style={[styles.dados]}>
              <Text>Patrícia Tavares</Text>
              <Text>81 998765332</Text>
            </View>

          <View style={[styles.dados]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
              style={{ width: 100, height: 100, padding: '0px', margin: '0px'}}
            />
          </View>

          <View style={[styles.dados]}>
            <Text>Rodrigo Antunes</Text>
            <Text>81 987765525</Text>
          </View>



        </View>

    </SafeAreaProvider>

  )

}

const cadUser = () => {

  return (

    <View style={[styles.geral]}>

      <View>

        <ArrowLeftOutlined />
        <Text>Usuário</Text>

      </View>

      <View>
        <Text>Nome</Text>
        <Input></Input>
        <Text>cpf</Text>
        <Input></Input>

        <Text>email</Text>
        <Input></Input>

        <Text>senha</Text>
        <Input></Input>

        <Button>Salvar</Button>
      </View>

    </View>


  )
}

const cadContato = () => {

  return (

    <View style={[styles.geral]}>

      <View>

        <ArrowLeftOutlined />
        <Text>Contato</Text>

      </View>

      <View>
        <Text>Nome</Text>
        <Input></Input>
        <Text>Email</Text>
        <Input></Input>

        <Text>Telefone</Text>
        <Input></Input>

        <Button>Salvar</Button>
      </View>

    </View>


  )
}

const alterContato = () => {

  return (

    <View style={[styles.geral]}>

      <View>

        <ArrowLeftOutlined />
        <Text>Contato</Text>

      </View>

      <View>
        <Text>Nome</Text>
        <Input value='Marco Andrade'></Input>
        <Text>Email</Text>
        <Input value='mand@gmail.com'></Input>

        <Text>Telefone</Text>
        <Input value='81 988553424'></Input>

        <Button>Alterar</Button>
        <Button>Excluir</Button>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({

  login: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAE2CD',
  },
  contatos: {

    display:'flex',

  },
  cadUser: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  dados: {

    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default contatos
