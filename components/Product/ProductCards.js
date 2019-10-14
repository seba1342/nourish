import React, {useState} from 'react';
import {
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Colors} from '../../assets/constants.js';

var ratingColor = '#123456';

const ProductCards = product => {
  const [visible, setVisible] = useState(false);

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
            switch (item.rating) {
              case 1:
                ratingColor = Colors.green;
                break;
              case 2:
                ratingColor = Colors.yellow;
                break;
              default:
              case 3:
                ratingColor = Colors.red;
                break;
            }
            return (
              <View style={styles.productCard}>
                <Icon
                  style={[{color: ratingColor}]}
                  size={64}
                  name={item.iconPath}
                />
                <Text style={{color: ratingColor, fontSize: 18}}>
                  {item.title}
                </Text>
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
    marginTop: 24,
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
});
