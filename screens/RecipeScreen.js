import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Recipes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeScreen;
