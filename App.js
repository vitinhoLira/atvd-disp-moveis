import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { Button, Input, Icon } from '@rneui/themed'

const login = () => {
  return (
    <View style={[styles.login]}>
      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
          style={{ width: 100, height: 100 }} // Defina o tamanho desejado da imagem
        />
      </View>

      <View style={[styles.cadastro]}>
        <Input placeholder='Entrar' />
        <Input placeholder='Senha' />
      </View>

      <View>
        <Button
          title='Log in'
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 5,
            margin: 10,
          }}
        ></Button>
      </View>

      <View style={[styles.cadastrar]}>
        <Button title='Cadastrar' />
      </View>
    </View>
  )
}

const contatos = () => {
  return (
    <View style={[styles.contatos]}>

      <View>
        <Text>Lista de contatos</Text>
        <Icon
        name='pluscircleo' />
      </View>

      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
          style={{ width: 100, height: 100 }}
          
        /> 
          <Text>Marcos Andrade</Text>
          <Text>81 988553424</Text>
      </View>

      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
          style={{ width: 100, height: 100 }}
        />
        <Text>Patrícia Tavares</Text>
          <Text>81 998765332</Text>
        
      </View>

      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <Text>Rodrigo Antunes</Text>
          <Text>81 987765525</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contatos: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
})

export default contatos
