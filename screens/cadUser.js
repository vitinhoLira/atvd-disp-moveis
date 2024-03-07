import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import { Button, Input } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

const cadUser = () => {

  const navigation = useNavigation();

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

export default cadUser; 