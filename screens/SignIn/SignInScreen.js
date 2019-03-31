import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { func, string } from 'prop-types';
import Touchable from 'react-native-platform-touchable';
import { handleFacebookLogIn } from './operations';


export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleFacebookLogIn = handleFacebookLogIn.bind(this);
  }

  static navigationOptions = {
    title: 'Sign In',
  };

  static propTypes = {
    facebookUserID: string,
    name: string,
    userID: string,
    signIn: func,
  };

  static defaultProps = {
    facebookUserID: undefined,
    isReady: undefined,
    name: undefined
  };


  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          Resources
          </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => handleFacebookLogIn(this.props.signIn)}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../../assets/images/robot-prod.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                {this.props.name === undefined ? "Sign In With Facebook" : this.props.name}
              </Text>
            </View>
          </View>
        </Touchable>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
