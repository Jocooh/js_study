const defalutResult = 0;
let currentResult = defalutResult;

function add() {
  currentResult = currentResult + userInput.value;
  // 1.현재 값과 user가 input한 값을 더한다.
  outputResult(currentResult,'');
  //2.출력 창에 내가 적은 숫자가 나오도록 해준다.
  //outputResult(result,text)
}
 
addBtn.addEventListener('click', add);
//버튼 클릭시 add함수 실행
outputResult(currentResult, calculationDescription);