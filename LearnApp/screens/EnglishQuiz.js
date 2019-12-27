import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import { fetchQuestions } from "./actions";
import Button from "react-native-button";
import { combineRandomCorreactAndInCorrectAnswer } from "../utils";

const combineAnswersQuiz = combineRandomCorreactAndInCorrectAnswer(quiz);
const EnglishQuiz = () => {
  const questionResources = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const { correct_answer } = quiz;
  const [isShowCorrectAnswer, setIsShowCorrectAnswer] = useState(false);
  useEffect(() => {
    dispatch(fetchQuestions());  
  }, []);
  const { question, answers } = combineAnswersQuiz;
  const _handlePressAnswer = item => {
    if (item === correct_answer) setIsShowCorrectAnswer(true);
  };
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
        <Text style={styles.question}>{question}</Text>
        <FlatList
          data={answers}
          renderItem={({ item }) => (
            <Button
              key={item}
              style={{ fontSize: 25, color: "white" }}
              styleDisabled={{ color: "white" }}
              containerStyle={{
                margin: 10,
                height: 45,
                overflow: "hidden",
                borderRadius: 10,
                borderWidth: 2,
                borderColor:
                  isShowCorrectAnswer && item === correct_answer
                    ? "#ADFF2F"
                    : "coral"
              }}
              disabledContainerStyle={{ backgroundColor: "pink" }}
              onPress={() => _handlePressAnswer(item)}
            >
              {item}
            </Button>
          )}
          keyExtractor={item => item}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  answers: {
    margin: 10,
    height: 45,
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "coral"
  },
  question: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    margin: 10
  }
});

export default EnglishQuiz;
