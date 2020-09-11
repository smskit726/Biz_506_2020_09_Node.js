// sub라는 이름의 한수를 선언
const sub = function () {
  console.log("나는 서브 모듈입니다.");
};

// 위에서 선언한 sub함수를 다른곳에서 참조할 수 있도록 하라!
module.exports = sub;
