const defalutResult = 0;
let currentResult = defalutResult;
const $userInput = document.querySelector('#input-number');

function getUserNumberInput() {
  return parseInt($userInput.value);
} // 함수로 만들어서 재사용 쉽게 만들기

function add() {
  const userInputValue = getUserNumberInput;
  const description = `${currentResult}+${userInputValue}`;

  currentResult = currentResult + userInputValue;

  outputResult(currentResult, description);

  $userInput.value = '';
  $userInput.focus();
}

addBtn.addEventListener('click', add);
//버튼 클릭시 add함수 실행
outputResult(currentResult, calculationDescription);
