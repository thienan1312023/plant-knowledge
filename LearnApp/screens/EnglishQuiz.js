import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import Button from "react-native-button";

const quiz = {
  question: "Where ______ the Battle of the Bulge?",
  answers: [
    {
      key: 1,
      content: "are"
    },
    {
      key: 1,
      content: "is"
    },
    {
      key: 1,
      content: "were"
    },
    {
      key: 1,
      content: "was"
    }
  ]
};
export default class EnglishQuiz extends Component {
  selectedColor = 'coral';
  _handlePressAnswer = key => {
    this.selectedColor = 'blue';
  };
  render() {
    const { question, answers } = quiz;
    return (
      <ImageBackground
        source={require("../assets/quiz-background.jpg")}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "#FFF00F"
        }}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", margin: 10 }}>
            {question}
          </Text>
          <FlatList
            data={answers}
            renderItem={({ item }) => (
              <Button
                style={{ fontSize: 25, color: "white" }}
                styleDisabled={{ color: "white" }}
                containerStyle={{
                  margin: 10,
                  height: 45,
                  overflow: "hidden",
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: this.selectedColor
                }}
                disabledContainerStyle={{ backgroundColor: "pink" }}
                onPress={() => this._handlePressAnswer(item.key)}
              >
                {item.content}
              </Button>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  }
});
