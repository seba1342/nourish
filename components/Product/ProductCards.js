import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../assets/constants.js';

const ProductCards = product => {
  console.log(product);
  return (
    <View style={styles.productCard}>
      {product.score.map((prop, key) => {
        return (
          <View style={styles.productCard}>
            <Text>{prop.title}</Text>
            <Text>{prop.rating}</Text>
            {/* <Image source={prop.iconPath} /> */}
          </View>
        );
      })}
    </View>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  productCard: {
    height: '50px',
    width: '50px',
    borderRadius: 5,
    display: 'flex',
  },
});
