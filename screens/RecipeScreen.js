import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Scanned',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text>Scanned</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
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
