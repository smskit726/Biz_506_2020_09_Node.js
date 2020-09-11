// sub.js파일을 main.js에 가져와서 사용할 준비를 하라
const sub = require("./sub.js");
// sub.js에 있는 sub() 함수를 실행하라
sub();

// const로 선언된 sub라는 변수에 값을 저장하는 코드
// 실행오류
// sub라는 변수는 일반적인 변수가 아니고
// sub.js 파일을 가져온 함수이기 때문에 변수처럼 값을 변경하는 오류를 범하지 않기 위해서
// 선언할때 const키워드로 선언한다.
// sub = "korea";
