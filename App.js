import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons'



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
    <View style={[styles.geral]}>

      <View>
        <Text>Lista de contatos</Text>
        <PlusCircleOutlined />
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

const cadUser = () => {

  return (

    <View style={[styles.geral]}>

      <View>

        <ArrowLeftOutlined/>
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

        <ArrowLeftOutlined/>
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

        <ArrowLeftOutlined/>
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
  geral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  login: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff0',
  },
  contatos: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  cadUser: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
})

export default login
