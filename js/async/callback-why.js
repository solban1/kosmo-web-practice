export default function() {
  class Counter {
    constructor(callback) {
      this.counter = 0;
      this.callback = callback;
    }

    increment() {
      this.counter++;
      this.callback(this.counter);
    }
  }

  const counter = new Counter((c) => {
    console.log(c);
  });

  counter.increment();
  counter.increment();
  
}
