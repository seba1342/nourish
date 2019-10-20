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
    backgroundColor: Colors.light,
    width: '100%',
    height: 330,
    top: 0,
    left: 0,
  },
  sectionTitle: {
    fontSize: 32,
    color: Colors.primary,
    marginVertical: 24,
    fontFamily: 'Quicksand-Bold',
  },
});
