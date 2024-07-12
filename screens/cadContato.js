import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class CadContato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            numero: '',
            email: ''
        };
    }

    handleCad = () => {
        let myuuid = uuidv4();
        try {
            const url = 'http://localhost:3000/agenda';
            console.log('URL para requisição POST:', url);

            axios.post(url, {
                id: myuuid,
                nome: this.state.nome,
                numero: this.state.numero,
                email: this.state.email
            });

            console.log('Contato cadastrado com sucesso');
            this.props.navigation.navigate('contatos');

        } catch (error) {
            console.error('Erro ao cadastrar contato', error);
        }
    };

    render() {
        return (
            <SafeAreaProvider>
                <Header
                    barStyle="default"
                    centerComponent={{
                        text: "Contato",
                        style: { color: "#fff" }
                    }}
                    leftComponent={
                        <Button
                            icon={
                                <Icon
                                    name="arrow-left"
                                    type="font-awesome"
                                    size={15}
                                    color="white"
                                />
                            }
                            onPress={() => this.props.navigation.navigate('contatos')}
                        />
                    }
                />

                <View style={styles.cadUser}>
                    <View>
                        <Text>Nome</Text>
                        <Input 
                            inputStyle={{
                                border: '1px solid',
                                backgroundColor: 'white'
                            }}
                            value={this.state.nome}
                            onChangeText={(nome) => this.setState({ nome })}
                        />

                        <Text>Email</Text>
                        <Input 
                            inputStyle={{
                                border: '1px solid',
                                backgroundColor: 'white'
                            }}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />

                        <Text>Telefone</Text>
                        <Input 
                            inputStyle={{
                                border: '1px solid',
                                backgroundColor: 'white'
                            }}
                            value={this.state.numero}
                            onChangeText={(numero) => this.setState({ numero })}
                        />

                        <Button onPress={this.handleCad}>Salvar</Button>
                    </View>
                </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    cadUser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
