export default () => {
  console.assert(1 + 2 === 3);
  console.assert(3 ** 4 === 81);
  console.assert((1 == '1') === true);
  console.assert((1 === '1') === false);
};
