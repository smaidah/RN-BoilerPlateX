import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// asset and styles
import Assets from '../../../constants/AssetConstants';
import styles from './styles.js';

// actions
import { logout } from '../../../store/actions/authAction';

class AppHeader extends Component {
  render() {
    const {
      title = false,
      showMenu = false,
      showLogout = false,
      isConnected,
    } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor="#44821a" barStyle="light-content" />
        <View style={styles.header}>
          {showMenu && (
            <TouchableOpacity
              transparent
              style={styles.marginRight}
              onPress={() => console.log('Menu Pressed')}>
              <Image source={Assets.menu} />
            </TouchableOpacity>
          )}
          {!!title && (
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.titleText}>
                {title}
              </Text>
            </View>
          )}
          {!isConnected && (
            <Image style={styles.marginRight} source={Assets.offline} />
          )}
          {showLogout && (
            <TouchableOpacity transparent onPress={() => this.props.logout()}>
              <Image source={Assets.logout} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { isConnected } = state.app;
  return { isConnected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
