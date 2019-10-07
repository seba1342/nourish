import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Camera from 'react-native-camera';

export default class HomeScreen extends Component {
  onBarCodeRead = response => {
    Alert.alert(
      'Barcode value is' + response.data,
      'Barcode type is' + response.type,
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => (this.camera = cam)}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={{backgroundColor: 'white'}}>BARCODE SCANNER</Text>
        </Camera>
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
