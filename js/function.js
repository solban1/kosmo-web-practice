export default () => {
  const f1 = function innerF() {
    console.log('f1');
  };
  // innerF(); // error
  f1();

  (function () {
    console.log('instant');
  })();
};
