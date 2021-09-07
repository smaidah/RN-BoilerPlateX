// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NetInfo from '@react-native-community/netinfo';

// constants
import AppRoutes from '../constants/AppRoutes';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// actions
import { setIsConnected } from '../store/actions/appAction';
import { userAutoLoggedIn } from '../store/actions/authAction';

// screens
import LoginScreen from '../screens/Login';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.navigationRef = React.createRef();
  }

  async componentDidMount() {
    this.props.userAutoLoggedIn();
    this.unsubscribeNetInfo = NetInfo.addEventListener(async state => {
      await this.props.setIsConnected(state.isConnected);
      if (state.isConnected) {
        console.log('connected');
      } else {
        console.log('no internet');
      }
    });
  }

  render() {
    let { token } = this.props;

    return (
      <NavigationContainer ref={this.navigationRef}>
        {token ? (
          <Stack.Navigator
            headerMode="none"
            initialRouteName={AppRoutes.Dashboard}>
            <Stack.Screen name={AppRoutes.Dashboard} component={Dashboard} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator headerMode="none" initialRouteName={AppRoutes.Login}>
            <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

function mapStateToProps(state) {
  const { token } = state.user;
  return { token };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setIsConnected, userAutoLoggedIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
