const defalutResult = 0;
let currentResult = defalutResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  //1.input값은 무조건 문자열이 되므로 나열이 된다. => 숫자로 바꿔주자
  outputResult(currentResult, '');
  //2.출력 창에 내가 적은 숫자가 나오도록 해준다.
  //outputResult(result,text)
}

addBtn.addEventListener('click', add);
//버튼 클릭시 add함수 실행
outputResult(currentResult, calculationDescription);
