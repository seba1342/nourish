import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {NavigationEvents} from 'react-navigation';

import ProductScreen from './ProductScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: true,
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
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              this.props.navigation.navigate('Product');
            }}
          />
        )}
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
});
