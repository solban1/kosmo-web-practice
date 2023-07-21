'use strict';

// 문제1) 배열의 데이터를 결합해서 문자열로 만드시오
const fruits = ['사과', '바나나', '오렌지'];
console.log(fruits.join('|'));

// 문제2) 문자열로 배열을 만드시오
const fruits2 = '배,수박,포도,키위';
console.log(fruits2.split(','));

// 문제3) 배열을 거꾸로 만드시오
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// 문제4) 일부 배열의 값을 떼어내세요
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(2));

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('홍길동', 30, true, 46),
  new Student('이순신', 29, false, 81),
  new Student('강감찬', 31, true, 91),
  new Student('유관순', 40, false, 67),
  new Student('세종대왕', 19, true, 89),
];
// 문제5) 91점을 받은 학생을 찾으시오
console.log(students.find((s) => s.score === 91));

// 문제6) 등록된 학생들의 배열을 만드시오
console.log(students.filter((s) => s.enrolled));
// console.log(students.filter(({ enrolled }) => enrolled)); // object destructuring

// 문제7) 점수들의 배열을 만드시오
console.log(students.map((s) => s.score));
// console.log(students.map(({ score }) => score));

// 문제8) 점수가 50점보다 낮은 학생이 있는지 확인하시오
console.log(students.some((s) => s.score < 50));
console.log(students.some(({ score }) => score < 50));

// 문제9) 스코어 평균을 구하시오
console.log(students.reduce((prev, s) => prev + s.score, 0) / students.length);

// 문제10) 50점 이상 점수들의 문자열을 만드시오
console.log(
  students
    .map((s) => s.score)
    .filter((n) => n >= 50)
    .join(', '),
);

// 문제11) 점수들을 오름차순으로 정렬된 문자열을 만드시오
console.log(
  students
    .map((s) => s.score)
    .toSorted()
    .join(', '),
);

console.log([1, 9, 100, 8, 900].sort((a, b) => a - b).toString());

const arr3 = [1, 2, 3, 4, 5];
const fn = function(num) {
  return '나는 ' + num;
}
console.log(arr3.map(fn));
