import React from 'react';
import {View, Text, Button} from 'react-native';

class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Recipes</Text>
      </View>
    );
  }
}

export default RecipeScreen;
