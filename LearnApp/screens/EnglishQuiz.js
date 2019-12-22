import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableHighlight
} from "react-native";

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
  render() {
    return (
      <View
        style={{
          backgroundImage: require("../assets/quiz-background.jpg"),
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignSelf:"center",
          alignItems:"center",
          alignContent:"center",
          flexDirection: "row",
          backgroundColor: "#FFF00F"
        }}
      >
        <View style={styles.container}>
          <Text>{quiz.question}</Text>
          <FlatList
            data={quiz.answers}
            renderItem={({ item }) => (
              <TouchableHighlight>
                <Text> {item.content} </Text>
              </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  }
});
