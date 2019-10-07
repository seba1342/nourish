import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RecipeScreen from './screens/RecipeScreen';

import {Colors} from './assets/constants';

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
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
              size={25}
              name={'shopping-bag'}
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
        tabBarLabel: 'Recipe',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'book'} />
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
