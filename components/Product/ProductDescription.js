import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colors} from '../../assets/constants.js';

const ProductDescription = ({
  productImage,
  productTitle,
  productDescription,
}) => {
  return (
    <View>
      <Image style={styles.productImage} source={productImage} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{productTitle}</Text>
        <Text style={styles.sectionDescription}>{productDescription}</Text>
      </View>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  productImage: {
    width: '100%',
    height: 350,
    top: 0,
    left: 0,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
});
