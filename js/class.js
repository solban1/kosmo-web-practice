export default () => {
  'use strict';
  class Person {
    constructor() {
      this.speak = () => {
        console.log('speak');
      };
    }
  }

  const p = new Person();
  p.speak();

  class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() { // getter
      return `${this.lastName} ${this.firstName}`;
    }
    set fullName(str) { // setter
      const [last, first] = str.split(' ');
      this.lastName = last;
      this.firstName = first;
    }
  }

  const user = new User('순신', '이', 30);
  console.log(`user.fullName: ${user.fullName}`); // '이 순신'
  user.fullName = '홍 길동';
  console.log(`user.firstName: ${user.firstName}`); // '길동'

  class Human {
    constructor(name) {
      this.name = name;
    }
    
    move() {
      console.log(this.name + '이(가) 걷는다.');
    }
    say(sentence) {
      console.log(this.name + ': ' + sentence);
    }
  }

  class SuperMan extends Human {
    constructor(name) {
      super(name);
    }

    move() {
      console.log(this.name + '이(가) 날아다닌다.');
    }
  }

  const superman = new SuperMan('클락');
  superman.move();

  superman.say('나는 슈퍼맨이다');


};
