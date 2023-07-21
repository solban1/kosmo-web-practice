export default function () {
  function add(num1: number, num2: number): void {
    console.log(num1 + ' ' + num2);
  }

  add(1, 2);
  // add(1, 2, 3) // error
  // add('hello', 'world') // error
  // add(1) // error

  function add2(num1: number, num2: number): number {
    return num1 + num2;
  }

  const r: number = add2(10, 20);
  console.log(r);

  function showItems(arr: number[]) {
    arr.forEach((item) => console.log(item));
  }

  showItems([1, 2, 3]);
}
