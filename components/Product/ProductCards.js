import React, {useState} from 'react';
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {Colors} from '../../assets/constants.js';

const ProductCards = product => {
  const [visible, setVisible] = useState(false);

  console.log(product.product.score[0].title);
  for (let p in product.product.score) {
    console.log(p.title);
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onPress={() => {
          setVisible(!visible);
        }}>
        <View>
          <TouchableHighlight
            onPress={() => {
              setVisible(!visible);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setVisible(!visible);
        }}>
        <View style={styles.productCardContainer}>
          {product.product.score.map((item, key) => {
            return (
              <View style={styles.productCard}>
                <Text>{item.title}</Text>
                <Text>{item.rating}</Text>
                {/* <Image source={prop.iconPath} /> */}
              </View>
            );
          })}
        </View>
      </TouchableHighlight>
    </>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  productCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: Colors.secondary,
  },
  productCard: {
    width: '35%',
    height: 170,
    backgroundColor: Colors.light,
    borderRadius: 10,
    marginVertical: 12,
    shadowColor: Colors.dark,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
});
