/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DialogsListScreen from './src/screens/DialogsListScreen';
import DialogScreen from './src/screens/DialogScreen';
import DialogHeader from './src/components/DialogHeader';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="DialogsListScreen"
              component={DialogsListScreen}
            />
            <Stack.Screen
              name="DialogScreen"
              component={DialogScreen}
              options={{
                header: ({scene, previous, navigation}) => {
                  return (
                    <DialogHeader
                      goBack={() => navigation.goBack()}
                      item={
                        navigation.dangerouslyGetState().routes[1]?.params?.item
                      }
                    />
                  );
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
