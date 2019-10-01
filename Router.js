import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RecipeScreen from './screens/RecipeScreen';

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
    Profile: {
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
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
      },
    },
    Image: {
      screen: RecipeScreen,
      navigationOptions: {
        tabBarLabel: 'Recipe',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'book'} />
          </View>
        ),
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87'},
  },
);
