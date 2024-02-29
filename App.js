import { Input } from '@rneui/themed'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '@rneui/themed'

const Flex = () => {
  return (
    <View style={[styles.container]}>
      <View>
        <Image
          source={require('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png')}
        />
      </View>
      <View style={[styles.cadastro]}>
        <Input placeholder='Login' />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cadastro: {},
})

export default Flex
