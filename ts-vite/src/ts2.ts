export default function () {
  const car: string = 'truck';
  const age: number = 31;
  const isAdult: boolean = true;
  const a: null = null;
  const b: undefined = undefined;

  const arr: number[] = [1, 2, 3];
  const arr2: Array<number> = [1, 2, 3]; // equivalent
  console.log(arr);
  console.log(arr2);

  const c: [string, number] = ['s', 2];
  console.log(c[0].toUpperCase());

  function neverFunc(): void {
    throw new Error();
  }

  const enum Os {
    Windows,
    macOS,
    Linux,
    iOS,
    Android,
  }
  console.log(Os.Windows);
  const f = function (os: Os) {
    if (os === Os.Linux) {
      console.log('I love Linux');
    }
  };

  f(Os.Linux);

  type Score = 'A' | 'B' | 'C' | 'D' | 'F';
  const yourScore: Score = 'F';

  console.log('당신은 ' + yourScore + ' 입니다.');
}
