import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {CLIENT_FETCH_ALL} from '../api/apiBackend.js';

class EdiitClientScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { listClient: [] }
  }

  doEditCliente = () =>{
    this.props.navigation.navigate('Home')
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
        <Text>Edit cliente</Text>


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
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default EditClientScreen;