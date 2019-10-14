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
import Button from 'apsl-react-native-button';

import {Colors} from '../../assets/constants.js';

var ratingColor = '#123456';

const ProductCards = product => {
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState({});

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onPress={() => {
          setVisible(!visible);
        }}>
        <View style={styles.productModal}>
          <View style={styles.productModalInner}>
            <Text style={styles.modalTitle}>{score.title}</Text>
            <Text style={styles.modalCopy}>{score.ratingDescription}</Text>
            <TouchableHighlight style={styles.closeModal}>
              <View>
                <Button
                  onPress={() => {
                    setVisible(!visible);
                  }}
                  style={[styles.closeModal, styles.buttonSecondary]}
                  textStyle={{color: Colors.light, fontSize: 18}}>
                  Close
                </Button>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

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
            <TouchableHighlight
              style={styles.productCard}
              onPress={() => {
                setVisible(!visible);
                setScore(item);
              }}>
              <View style={styles.productCardInner}>
                <Icon
                  style={[{color: ratingColor}]}
                  size={64}
                  name={item.iconPath}
                />
                <Text style={{color: ratingColor, fontSize: 18}}>
                  {item.title}
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  closeModal: {
    backgroundColor: Colors.primary,
    color: Colors.light,
    borderRadius: 30,
    borderWidth: 0,
    width: '50%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  modalCopy: {
    fontSize: 16,
    color: Colors.primary,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  productModal: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
  },
  productModalInner: {
    width: '80%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  productCardInner: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
});
