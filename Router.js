import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RecipeScreen from './screens/RecipeScreen';

import {Colors} from './assets/constants';

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={21} name={'barcode'} />
          </View>
        ),
      },
    },
    Product: {
      screen: ProductScreen,
      navigationOptions: {
        tabBarLabel: 'Product',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={21}
              name={'shopping-basket'}
            />
          </View>
        ),
        activeColor: Colors.secondary,
        inactiveColor: Colors.accent,
        barStyle: {backgroundColor: Colors.primary},
      },
    },
    Recipe: {
      screen: RecipeScreen,
      navigationOptions: {
        tabBarLabel: 'Scanned',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={21} name={'heart'} />
          </View>
        ),
        activeColor: Colors.secondary,
        inactiveColor: Colors.accent,
        barStyle: {backgroundColor: Colors.primary},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: Colors.secondary,
    inactiveColor: Colors.accent,
    barStyle: {backgroundColor: Colors.primary},
  },
);
