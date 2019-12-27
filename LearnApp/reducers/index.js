import { types } from "../actions";
const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return { ...state, loading: true };
    case types.QUESTIONS_RECEIVED:
      return { ...state, questions: action.json[0], loading: false };
    default:
      return state;
  }
};
export default reducer;
