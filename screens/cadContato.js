import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/themed'
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class CadContato extends React.Component {


    render() {

        return (

            <SafeAreaProvider>

                <Header
                    barStyle="default"
                    centerComponent={{
                        text: "Contato",
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
                        onPress={() => this.props.navigation.navigate('contatos')}

                    />}
                />

                <View style={[styles.cadUser]}>
                    <View>

                        <Text>Nome</Text>
                        <Input inputStyle={{
                            border: '1px solid',
                            backgroundColor: 'white'
                        }} />


                        <Text>email</Text>
                        <Input inputStyle={{
                            border: '1px solid',
                            backgroundColor: 'white'
                        }} />

                        <Text>Telefone</Text>
                        <Input inputStyle={{
                            border: '1px solid',
                            backgroundColor: 'white'
                        }} />

                        <Button onPress={() => this.props.navigation.navigate('contatos')}>Salvar</Button>

                    </View>
                </View>

            </SafeAreaProvider>

        )


    }

}

const styles = StyleSheet.create({
    
    cadUser: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});