import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button, Input } from '@rneui/themed'
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from './screens/login'
import AlterContato from './screens/alterContato';
import CadContato from './screens/cadContato';
import CadUser from './screens/cadUser';
import Contatos from './screens/contatos';


const Stack = createStackNavigatior();

export default function App() {


  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='CadContato' component={CadContato}/>
        <Stack.Screen name='AlterContato' component={AlterContato}/>
        <Stack.Screen name='CadUser' component={CadUser}/>
        <Stack.Screen name='Contatos' component={Contatos}/>

      </Stack.Navigator>

    </NavigationContainer>

  )

}
