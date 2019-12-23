const combineRandomCorreactAndInCorrectAnswer = item => {
  const answers = [item.correct_answer, ...item.incorrect_answers];
  const randomizeAnswers = randomizeItemInArray(answers);
  return {
    ...item,
    answers: randomizeAnswers
  };
};

const randomizeItemInArray = (_array) => {
    let newRandomeArr = [];
    while(_array.length !== 0){
        let randomIndex = Math.floor(Math.random() * _array.length);
        newRandomeArr.push(_array[randomIndex]);
        _array.splice(randomIndex, 1);
    }
    return newRandomeArr;
}

export {
    combineRandomCorreactAndInCorrectAnswer
}