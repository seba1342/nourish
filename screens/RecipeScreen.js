import React from 'react';
import {
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../assets/constants.js';

class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Scanned',
  };

  state = {
    isLoading: true,
    scannedProducts: [],
  };

  componentDidMount = () => {
    this._onFocusListener = this.props.navigation.addListener(
      'didFocus',
      payload => {
        AsyncStorage.getItem('scannedProducts').then(products => {
          if (products) {
            const scannedProducts = JSON.parse(products);
            this.setState({scannedProducts: scannedProducts}, () => {
              this.setState({isLoading: false});
            });
          } else {
            this.setState({
              isLoading: false,
              scannedProducts: [],
            });
          }
        });
      },
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Scanned products</Text>
          </View>
          <View>
            {this.state.scannedProducts ? (
              <FlatList
                data={this.state.scannedProducts}
                renderItem={({item}) => (
                  <TouchableHighlight
                    onPress={() => {
                      this.props.navigation.navigate('Product', item);
                    }}>
                    <View style={styles.row}>
                      <Image
                        style={styles.productImage}
                        source={item.imagePath}
                      />
                      <Text style={styles.products}>{item.itemName}</Text>
                    </View>
                  </TouchableHighlight>
                )}
              />
            ) : (
              <Text>No scanned products</Text>
            )}
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  scrollView: {
    backgroundColor: Colors.secondary,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: Colors.secondary,
    height: 100,
    alignItems: 'center',
  },
  products: {
    padding: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
    flex: 1,
    flexShrink: 1,
  },
  productImage: {
    width: '20%',
    margin: 0,
    padding: 0,
    height: '100%',
    resizeMode: 'contain',
  },
  sectionContainer: {
    paddingHorizontal: 18,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginVertical: 18,
    paddingBottom: 10,
    flex: 1,
    flexShrink: 1,
    textAlign: 'center',
  },
});

export default RecipeScreen;
