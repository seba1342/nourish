import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../assets/constants.js';

const ProductRating = () => {
  return <View style={styles.productRating} />;
};

export default ProductRating;

const styles = StyleSheet.create({
  productRating: {
    margin: 24,
    display: 'flex',
  },
});
