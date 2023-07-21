export default function (): void {
  function hello1(name?: string): string {
    return `hello ${name}` || 'helloworld'; // hello undefined
  }

  console.log(hello1());

  function hello2(name = 'world') {
    return `hello ${name}`;
  }
  console.log(hello2());

  function hello3(name: string, age?: number): string {
    if (age !== undefined) {
      if (age < 28) {
        return `Hello, young ${name}`;
      } else {
        return `Hello, old ${name}`;
      }
    } else {
      return `Hello, unknown ${name}`;
    }
  }

  console.log(hello3('man', 29));

  function addAll(...nums: number[]): number {
    return nums.reduce((prev, curr) => prev + curr);
  }

  console.log(addAll(1, 2, 3, 4, 5));

  // this
  interface Human {
    name: string;
  }
  const man: Human = {name: '이순신'};

  function showName(this:Human, gender: '남'|'여'): void {
    console.log(this.name, gender);
  }
  console.log(showName.bind(man)('남'));

  // overloading
  function join(name: string, age: string): string;
  function join(name: string, age: number): string;

  function join(name: string, age: string|number): string {
    if (age) {
      console.log(age);
    }
    console.log('join');
    return '1';
  }

  join('1', 2);
}
