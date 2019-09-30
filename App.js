/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, Button} from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import ProductScreen from './screens/ProductScreen';
import RecipeScreen from './screens/RecipeScreen';
import HomeScreen from './screens/HomeScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Product: {screen: ProductScreen},
  Recipe: {screen: RecipeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
