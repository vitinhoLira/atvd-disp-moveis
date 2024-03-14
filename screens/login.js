import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import { Image, StyleSheet, Text, View } from 'react-native';

  const login = () => {

    const navigation = useNavigation();

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
          onPress={()=>navigation.navigate('contatos')}
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
          
          }}
          onPress={()=>navigation.navigate('cadUser')}
          />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAE2CD',
  }
  
});

export default login;  