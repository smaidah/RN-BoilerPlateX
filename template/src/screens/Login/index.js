import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import LoginFormView from '../../components/Login';

// actions
import { login } from '../../store/actions/authAction';

// request models
import { loginRequestModel } from '../../models/reuqestModels/auth';

// asset and styles
import styles from './styles';

class LoginScreen extends React.Component {
  handleLogin = async values => {
    if (!this.props.isConnected) {
      console.log('Limited or No Connectivity');
    } else {
      try {
        const { username, password } = values;
        if (username && password) {
          const request = loginRequestModel(username, password);
          await this.props.login(request);
        }
      } catch (error) {
        console.log('Login failed. Please try again.');
        console.log(error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />
        <LoginFormView onlogin={this.handleLogin} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { isConnected } = state.app;
  return { isConnected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
