import React from 'react';
import { Button,View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Input } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/OsContext';
import ClientScreen from './src/ClientScreen'; 
import EditClientScreen from './src/screens/EditClientScreen'; 
class HomeScreen extends React.Component {

  doCreateCliente = () =>{
    
    this.props.navigation.navigate('Details')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <Input
        
          placeholder="Nome do cliente: "
        />
        <Input
        
        placeholder="Endereço: "
       />

        <Button 
        onPress={()=>this.doCreateCliente()}
        title='Salvar'/>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: ClientScreen,
    EditClient: EditClientScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}