const questionWrap = document.querySelector('.question__list'),
      questionItems = document.querySelectorAll('.question__item'),
      questionVerticalPlank = document.querySelectorAll('.question__item-plunk__vertical'),
      questionHorizontalPlank = document.querySelectorAll('.question__item-plunk__horizontal'),
      questionItemStrWrap = document.querySelectorAll('.question__item-wrapper'),
      questionStr = document.querySelectorAll('.question__item-string'),
      questionAnswer = document.querySelectorAll('.question__item-answer');

function deleteQnActiveClass (e, arr, questionVerticalPlank, questionHorizontalPlank, questionItemStrWrap, questionStr, questionAnswer) {
    arr.forEach((item, index) => { {
    if (arr[index].closest('.question__item--active') || e != arr[index]) {
      arr[index].classList.remove('question__item--active');
      questionVerticalPlank[index].classList.remove('question__item-plunk__vertical--active');
      questionHorizontalPlank[index].classList.remove('question__item-plunk__horizontal--active');
      questionItemStrWrap[index].classList.remove('question__item-wrapper--active');
      questionStr[index].classList.remove('question__item-string--active');
      questionAnswer[index].classList.remove('question__item-answer--active');
    } 
  }
})
}

function addQnActiveClass (e, arr, questionVerticalPlank, questionHorizontalPlank, questionItemStrWrap, questionStr, questionAnswer) {
   deleteQnActiveClass(e, arr, questionVerticalPlank, questionHorizontalPlank, questionItemStrWrap, questionStr, questionAnswer);
  for (let index = 0; index <= arr.length; index++) {
    if (e == arr[index] || e == questionVerticalPlank[index] || e == questionVerticalPlank[index] || e == questionStr[index]) {
      arr[index].classList.toggle('question__item--active');
      questionVerticalPlank[index].classList.toggle('question__item-plunk__vertical--active');
      questionHorizontalPlank[index].classList.toggle('question__item-plunk__horizontal--active');
      questionItemStrWrap[index].classList.toggle('question__item-wrapper--active');
      questionStr[index].classList.toggle('question__item-string--active');
      questionAnswer[index].classList.toggle('question__item-answer--active');
      break;
    }
  }
};


questionWrap.addEventListener('click', e => {
  addQnActiveClass(e.target, questionItems, questionVerticalPlank, questionHorizontalPlank, questionItemStrWrap, questionStr, questionAnswer);
});

