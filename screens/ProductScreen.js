import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colors} from '../assets/constants.js';

import ProductDescription from '../components/Product/ProductDescription.js';
import ProductRating from '../components/Product/ProductRating';
import ProductCards from '../components/Product/ProductCards';

class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Product',
  };
  render() {
    const {navigation} = this.props;

    const product = navigation.state.params;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <View>
              <ProductDescription
                productImage={require('../assets/images/lavazza-coffee-pods.jpg')}
                productTitle={product.itemName}
                productDescription="Sexy coffee pods"
              />
              <ProductCards product={product} />
              <ProductRating />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF5ED',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    bottom: 0,
  },
});

export default ProductScreen;
