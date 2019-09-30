import React from 'react';
import {View, Text, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to product"
          onPress={() => navigate('Product', {name: 'Tuna'})}
        />
        <Button
          title="Go to recipes"
          onPress={() => navigate('Recipe', {name: 'Tuna'})}
        />
      </View>
    );
  }
}

export default HomeScreen;
