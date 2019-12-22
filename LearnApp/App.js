import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./navigations";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <Navigation />
      </SafeAreaView>
    );
  }
}
