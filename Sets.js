import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


export class Sets extends Component{
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Estos conductores van al mismo lugar que tú o casi </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });
  