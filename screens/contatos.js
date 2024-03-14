import { useNavigation } from '@react-navigation/native';
import { Header } from "@rneui/base";
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AlterContato from './alterContato';

const Contatos = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Lista de Contatos",
          style: { color: "#fff" }
        }}
        rightComponent={
          <Button
            icon={
              <Icon
                name="plus"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            onPress={() => navigation.navigate('cadContato')}
            
          />
        }
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

<View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate(AlterContato)} style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Marcos Andrade</Text>
            <Text style={styles.telefone}>81 988553424</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divisao]}></View>

        <TouchableOpacity onPress={()=>navigation.navigate(AlterContato)} style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Patrícia Tavares</Text>
            <Text style={styles.telefone}>81 998765332</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divisao]}></View>

        <TouchableOpacity onPress={()=>navigation.navigate(AlterContato)} style={styles.contato}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Rodrigo Antunes</Text>
            <Text style={styles.telefone}>81 987765525</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 50,
  },
});

export default Contatos;
