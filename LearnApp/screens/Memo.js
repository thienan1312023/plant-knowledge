import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Memo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MEMO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
