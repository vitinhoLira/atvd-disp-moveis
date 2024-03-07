import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";


const contatos = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaProvider>

      <Header

        barStyle="default"
        centerComponent={{
          text: "Lista de Contatos",
          style: { color: "#fff" }
        }}

        containerStyle={{ width: '100%' }}


        rightComponent={{ icon: "add", color: "#fff" }}

      />
      <View style={styles.container}>
        <View style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Marcos Andrade</Text>
            <Text style={styles.telefone}>81 988553424</Text>
          </View>
        </View>

        <View style={[styles.divisao]}></View>

        <View style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Patrícia Tavares</Text>
            <Text style={styles.telefone}>81 998765332</Text>
          </View>
        </View>
        <View style={[styles.divisao]}></View>

        <View style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Rodrigo Antunes</Text>
            <Text style={styles.telefone}>81 987765525</Text>
          </View>
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

export default contatos;

