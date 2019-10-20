import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colors} from '../assets/constants.js';

import ProductDescription from '../components/Product/ProductDescription.js';
import ProductCards from '../components/Product/ProductCards';

class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };
  render() {
    const {navigation} = this.props;
    const product = this.props.navigation.state.params;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {product ? (
            <ScrollView style={styles.scrollView}>
              <View>
                <ProductDescription
                  productImage={product.imagePath}
                  productTitle={product.itemName}
                />
                <ProductCards product={navigation.state.params} />
              </View>
            </ScrollView>
          ) : (
            <View style={styles.container}>
              <Text style={styles.sectionTitle}>
                Please start by scanning a product!
              </Text>
              <Button
                onPress={() => {
                  this.props.navigation.navigate('Recipe');
                }}
                style={[styles.button, styles.buttonPrimary]}
                textStyle={{color: Colors.light, fontSize: 18}}>
                Scan
              </Button>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.secondary,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: Colors.secondary,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
    flexShrink: 1,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    width: 124,
    height: 48,
    borderWidth: 0,
    borderRadius: 24,
    margin: 48,
    alignSelf: 'center',
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    color: Colors.light,
  },
});

export default ProductScreen;
