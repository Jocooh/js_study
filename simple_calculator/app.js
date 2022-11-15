const defalutResult = 0;
let currentResult = defalutResult;
const $userInput = document.querySelector('#input-number');

function add() {
  const userInputValue = parseInt($userInput.value); //동일하게 쓰인코드 변수로 정해주기 => 고칠때 한번만 정리하면되니까
  const description = `${currentResult}+${userInputValue}`;

  currentResult = currentResult + userInputValue;
  outputResult(currentResult, description);

  $userInput.value = '';
  $userInput.focus();
}

addBtn.addEventListener('click', add);
//버튼 클릭시 add함수 실행
outputResult(currentResult, calculationDescription);
