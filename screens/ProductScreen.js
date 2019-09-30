import React from 'react';
import {View, Text, Button} from 'react-native';

class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Products</Text>
      </View>
    );
  }
}

export default ProductScreen;
