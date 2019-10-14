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
        animationType="fade"
        transparent={true}
        visible={visible}
        onPress={() => {
          setVisible(!visible);
        }}>
        <View style={styles.productModal}>
          <View style={styles.productModalInner}>
            <View style={styles.modalTitleContainer}>
              <Icon
                style={[{color: score.ratingColor}]}
                size={64}
                name={score.iconPath}
              />
              <Text style={[styles.modalTitle, {color: score.ratingColor}]}>
                {score.title}
              </Text>
            </View>
            <Text style={[styles.modalCopy, {color: score.ratingColor}]}>
              {score.ratingDescription}
            </Text>
            <TouchableHighlight>
              <View>
                <Button
                  onPress={() => {
                    setVisible(!visible);
                  }}
                  style={[styles.closeModal, styles.buttonSecondary]}
                  textStyle={{
                    color: Colors.light,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
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
              item.ratingColor = Colors.green;
              break;
            case 2:
              item.ratingColor = Colors.yellow;
              break;
            default:
            case 3:
              item.ratingColor = Colors.red;
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
                  style={[styles.infoIcon, {color: item.ratingColor}]}
                  size={18}
                  name="info-circle"
                />
                <Icon
                  style={[{color: item.ratingColor}]}
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
    fontWeight: 'bold',
    width: '60%',
    paddingVertical: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: 15,
    alignSelf: 'center',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    width: '90%',
    height: '50%',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  productCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
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
  infoIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingRight: 10,
    paddingTop: 10,
    color: Colors.primary,
  },
});
