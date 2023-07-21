export default function (): void {
  type Score = 'A' | 'B' | 'C' | 'D' | 'F';

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear?: number;
    [grade: number]: Score;
  }

  const user: User = {
    name: 'Sol',
    age: 20,
    birthYear: 1995,
    1: 'A',
  };

  console.log(user[1]);

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (a, b) => {
    return a + b;
  };

  interface Car {
    color: string;
    wheels: number;
    start: () => void;
    // start(): void; // equivalent
  }

  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log(`start driving ${this.color} BMW`);
    }
  }

  interface Benz extends Car {
    door: number;
    stop: () => void;
  }

  const benz: Benz = {
    door: 5,
    wheels: 4,
    color: 'red',
    stop: () => {
      console.log(`${benz.color} Benz stops`);
    },
    start: () => {
      console.log(`start driving ${benz.color} Benz`);
    },
  };

  benz.start();
}
