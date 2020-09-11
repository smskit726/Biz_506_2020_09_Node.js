console.log("반갑습니다");
console.log(30 + 40);
console.log("Republic of Korea");
// 주석문 : 코드실행에 아무런 효과를 보이지 않는 문장

/*
여러줄 주석
*/

/**
 * Java DOC를 만들 때 사용하는 방식인데
 * js에서도 코딩 주석용도로 사용을 한다.
 */

console.log("Korea", "대한민국", 30 + 4);

// var : 전통적인 js의 변수 선언문
var 변수 = 30;
console.log(변수);

var 변수 = "Korea";
/*
키워드도 없이 변수를 선언할 수 없다.
키워드가 없이 아무때나 변수를 선언하는 코딩은 한편으로 매우 자유스러운 코딩이 될 수 있따.
모든 책임을 개발자가 자체적으로 저야 한다.
자바에서는 선언되지 않은 변수를 참조(읽기, 쓰기) 하면
컴파일러가 오류를 내서 잘못된 결과가 나오는 것을 어느정도 막아준다.
변수 선언이 자유로운 언어에서는 컴파일러 등이 변수에 대한 책임을 전혀 지지 않는다.
자바에서는 변수를 선언할 때 철저하게 변수형(type)을 지정해야 한다.
최근에 만들어진 언어들은 type선언이 자유로운 방식으로 만들어진다.
위에서 말한 것처럼 개발자가 져야할 책임이 매우 막중해지다보니
일부 다시 변수형을 지정하는 방식으로 회귀 하기도 한다.
*/
나도변수 = 50;

var 변수선언 = 30;
변수선언1 = 50;

// 새로운 js의 변수 선언문
// let : 한번 선언이 되면 다시 그 변수를 선언할 수 없다.
let let변수 = 30; // 숫자값
// let let변수 = "대한민국"; // 다시 문자열을 저장
console.log(let변수);

// js에서는 변수에 저장되는 값들의 매우 자유스럽다.
// js의 이러한 단점을 보완하기 위해서 TypeScript라는 친구가 MS에서 만들어 졋다.
// VS Code는 MS TypeScript 개발환경을 위해서 만든 도구

// 변수
var 변수 = "변수";
let 변수let = "변수";

// 상수
// 한번 선언되고 값이 저장되면 그 내용을 변경할 수 없다.
const 상수 = "상수";

// js 개발자 선배들이 주장하는 바
// 가급적 js에서는 const키워드를 많이 사용하자!!

// js에서 객체(VO)
// JSON(JavaScript Object Notation : 제이슨 객체)
let 객체 = { name: "홍길동", age: 34 };

console.log(객체.name);
console.log(객체.age);

// Key-Value 타입의 JSON객체
// num, name, dept : Key 변수명과 같은 원리
// 30, "홍길동", "컴공과" : data, 변수에 저장된 값
let 학생정보 = { num: 30, name: "홍길동", dept: "컴공과" };
console.log(학생정보.num);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let sum = 30;
for (let i = 0; i <= 10; i++) {
  sum += i;
}

console.log("합계", sum);

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i, "짝수");
  }
}
