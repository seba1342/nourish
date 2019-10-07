import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import UnityView from 'react-native-unity-view';

class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  render() {
    const {navigate} = this.props.navigation;
    let unityElement: JSX.Element;

    unityElement = (
      <UnityView
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      />
    );

    console.log(unityElement);

    return (
      <View style={styles.container}>
        {/* <UnityView
          style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
        /> */}
        {unityElement}
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
