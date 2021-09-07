import React from 'react';
import { View } from 'react-native';

// components
import DashboardComponent from '../../components/Dashboard';
import Header from '../../components/Common/Header';

// asset and styles
import styles from './styles';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Dashboard" showMenu={true} showLogout={true} />
        <DashboardComponent />
      </View>
    );
  }
}

export default DashboardScreen;
