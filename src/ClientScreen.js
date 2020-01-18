import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import {CLIENT_FETCH_ALL} from './api/apiBackend.js';
class ClientScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { listClient: [] }
  }

  doEditCliente = () =>{
   // this.child.navigation.navigate('EditClient')
  }

  async componentDidMount() {
    await fetch(CLIENT_FETCH_ALL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          listClient: data
        })
      )
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen de clientes</Text>
        <FlatList
          data={this.state.listClient}

          keyExtractor={(item) => {
            return item._id;
          }}

          renderItem={({ item }) => {
             return (
              <TouchableOpacity onPress={this.doEditCliente}>
                <View style={styles.row}>
                  <Text style={styles.title} keyExtractor={(item) => {
                    return item._id;
                  }}>{item.name} </Text>
                  <TouchableOpacity onPress={this.doEditCliente}>
                    <Feather style={styles.icon} name="search" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopWidth: 10,
    borderEndWidth:10,
    borderLeftWidth:10,
    borderBottomWidth:10,
    borderColor: 'black'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default ClientScreen;