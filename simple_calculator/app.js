const defalutResult = 0;
let currentResult = defalutResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  // input에 들어간 값은 기본적으로 문자열로 인식하므로 숫자열로 바꿔준다 || 아니면 +를 붙여서 숫자열로 바꿀 수 있다.
  outputResult(currentResult,'');
  //2.출력 창에 내가 적은 숫자가 나오도록 해준다.
  //outputResult(result,text)
}
 
addBtn.addEventListener('click', add);
//버튼 클릭시 add함수 실행
outputResult(currentResult, calculationDescription);