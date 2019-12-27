import { put, takeLatest, all } from "redux-saga/effects";

function* fetchQuestions() {
  const json = yield fetch(
    "https://opentdb.com/api.php?amount=10"
  ).then(response => response.json());

  yield put({
    type: "QUESTIONS_RECEIVED",
    json: json.articles || [{ error: json.message }]
  });
}

function* actionWatcher() {
  yield takeLatest("GET_QUESTIONS", fetchQuestions);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
