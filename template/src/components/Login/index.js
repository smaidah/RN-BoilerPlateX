import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

// asset and styles
import Assets from '../../constants/AssetConstants';
import styles from './styles.js';

class LoginFormView extends React.Component {
  render() {
    const { onlogin } = this.props;
    const loginData = { username: 'userX', password: 'passwordX' };

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Assets.logo} />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => onlogin(loginData)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default LoginFormView;
