import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {NavigationEvents} from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from 'apsl-react-native-button';

import {Colors} from '../assets/constants.js';

import ProductData from '../data/ProductsData.js';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Scan',
  };

  constructor(props) {
    super(props);

    this.state = {
      isFocused: true,
      scannedProductBarcode: '',
      scannedProductData: {},
      scannedProducts: [],
    };
  }

  getProductById = barcodeId => {
    ProductData.forEach(product => {
      if (product.id === barcodeId) {
        this.setState({
          scannedProductData: product,
        });
      }
    });
  };

  addScannedProduct = newProduct => {
    AsyncStorage.getItem('scannedProducts', (err, result) => {
      if (result !== null) {
        const products = JSON.parse(result);

        if (!products.some(product => product.id === newProduct.id)) {
          console.log(`${newProduct.id} not scanned, adding it now.`);
          let newProducts = JSON.parse(result).concat([newProduct]);
          AsyncStorage.setItem('scannedProducts', JSON.stringify(newProducts));
        } else {
          console.log(`${newProduct.id} already scanned.`);
        }
      } else {
        console.log('Data not found, initializing storage...', err);
        AsyncStorage.setItem('scannedProducts', JSON.stringify([newProduct]));
      }
    });
  };

  render() {
    const {loaded} = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.setState({loaded: true})}
          onDidBlur={() => this.setState({loaded: false})}
        />
        {loaded && (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              this.camera.pausePreview();
              this.setState({
                scannedProductBarcode: barcodes[0].data,
                scannedProductData: {},
              });
              this.getProductById(barcodes[0].data);
              this.RBSheet.open();
            }}
          />
        )}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={200}
          duration={250}
          animationType="fade"
          closeOnDragDown
          customStyles={{
            container: {
              backgroundColor: Colors.secondary,
            },
            draggableIcon: {
              backgroundColor: Colors.primary,
            },
          }}
          onClose={() => this.camera && this.camera.resumePreview()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.productTitle}>
              {this.state.scannedProductData.itemName
                ? this.state.scannedProductData.itemName
                : 'No product found matching this barcode.'}
            </Text>
          </View>

          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.RBSheet.close();
                this.camera.resumePreview();
              }}
              style={[styles.button, styles.buttonSecondary]}
              textStyle={{color: Colors.light, fontSize: 18}}>
              Scan Again
            </Button>
            {this.state.scannedProductData.itemName && (
              <Button
                onPress={() => {
                  const product = this.state.scannedProductData;
                  this.addScannedProduct(product);
                  this.RBSheet.close();
                  this.state.scannedProductData.itemName &&
                    this.props.navigation.navigate(
                      'Product',
                      this.state.scannedProductData,
                    );
                }}
                style={[styles.button, styles.buttonPrimary]}
                textStyle={{color: Colors.light, fontSize: 18}}>
                View Item
              </Button>
            )}
          </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 24,
    color: Colors.primary,
    textAlign: 'center',
    flex: 1,
    flexShrink: 1,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  button: {
    width: 124,
    height: 48,
    borderWidth: 0,
    borderRadius: 24,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    color: Colors.light,
  },
  buttonSecondary: {
    backgroundColor: Colors.accent,
    color: Colors.light,
  },
});
