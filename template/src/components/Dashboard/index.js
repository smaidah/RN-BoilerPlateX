import React from 'react';
import { Text, View } from 'react-native';

// asset and styles
import styles from './styles.js';

class DashboardComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    );
  }
}
export default DashboardComponent;
