import React from 'react';
import ProfileView from './ProfileView';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ProfileView />;
  }
}
