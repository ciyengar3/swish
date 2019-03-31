import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignIn';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { connect } from 'react-redux';



let HomeContainer = connect(state => state)(HomeScreen);
let SignInContainer = connect(state => state)(SignInScreen);
let ProfileContainer = connect(state => state)(ProfileScreen);


const HomeStack = createStackNavigator({
  Home: HomeContainer,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SignInStack = createStackNavigator({
  SignIn: SignInContainer,
});

SignInStack.navigationOptions = {
  tabBarLabel: 'Sign In',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Settings: ProfileContainer,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SignInStack,
  ProfileStack,
});
