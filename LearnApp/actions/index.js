export const types = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  RECEIVED_QUESTIONS: "RECEIVED_QUESTIONS"
};

export const fetchQuestions = () => ({
  type: types.FETCH_QUESTIONS
});

export const receivedQuestions = () => {
  type: types.RECEIVED_QUESTIONS;
};
