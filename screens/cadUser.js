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

          <Button onPress={() => navigation.navigate('login')}>Salvar</Button>

        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({

  cadUser: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }

}

);

export default cadUser; 