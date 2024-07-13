import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadUser from './screens//cadUser';
import contatos from './screens/contatos';
import login from './screens/login';
import AlterContato from './screens/alterContato';
import CadContato from './screens/cadContato';

const Stack = createNativeStackNavigator();

function App() {
  
  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="login">

        <Stack.Screen name='login' component={login}/>
        <Stack.Screen name='contatos' component={contatos}/>
        <Stack.Screen name='cadUser' component={cadUser}/>
        <Stack.Screen name='AlterContato' component={AlterContato}/>
        <Stack.Screen name='CadContato' component={CadContato}/>

      </Stack.Navigator>

    </NavigationContainer>

  )

}


export default App;