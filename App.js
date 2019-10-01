/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';

import {TabNavigator} from './Router';

// Wrap the app with the navigator in Router.js
const App = createAppContainer(TabNavigator);

export default App;
