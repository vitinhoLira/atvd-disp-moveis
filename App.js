import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadUser from './screens//cadUser';
import contatos from './screens/contatos';
import login from './screens/login';


const Stack = createNativeStackNavigator();

function App() {


  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="cadUser">

        <Stack.Screen name='login' component={login}/>
        <Stack.Screen name='contatos' component={contatos}/>
        <Stack.Screen name='cadUser' component={cadUser}/>

      </Stack.Navigator>

    </NavigationContainer>

  )

}


export default App;