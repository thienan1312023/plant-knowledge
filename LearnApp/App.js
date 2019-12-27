import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigations";
import { store } from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
          <Navigation />
        </SafeAreaView>
      </Provider>
    );
  }
}
