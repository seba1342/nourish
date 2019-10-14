import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {NavigationEvents} from 'react-navigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from 'apsl-react-native-button';

import {Colors} from '../assets/constants.js';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: true,
      scannedProductBarcode: '',
    };
  }

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
              this.setState({
                scannedProductBarcode: barcodes[0].data,
              });
              this.RBSheet.open();
            }}
          />
        )}
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={150}
          duration={250}
          animationType="fade"
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.secondary,
            },
          }}>
          <Text style={styles.productTitle}>
            {this.state.scannedProductBarcode}
          </Text>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => {
                this.RBSheet.close();
              }}
              style={[styles.button, styles.buttonSecondary]}
              textStyle={{color: Colors.light, fontSize: 18}}>
              Scan Again
            </Button>
            <Button
              onPress={() => {
                this.RBSheet.close();
                this.props.navigation.navigate('Product');
              }}
              style={[styles.button, styles.buttonPrimary]}
              textStyle={{color: Colors.light, fontSize: 18}}>
              View Item
            </Button>
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
    marginBottom: 24,
    color: Colors.primary,
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
