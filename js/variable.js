/**
 * variable types
 * primitive: number, string, boolean, null, undefined, symbol, bigint
 * object
 * function
 */
export default () => {
  console.assert(1 / 0 === Infinity);
  console.assert(true + true === 2);
  console.assert(false == 0);
  console.assert('' == 0);
  console.assert(typeof null === 'object');

  const sym1 = Symbol('a');
  const sym2 = Symbol('a');
  console.assert((sym1 === sym2) === false);

  const sym3 = Symbol.for('a');
  const sym4 = Symbol.for('a');
  console.assert((sym3 === sym4) === true);

  console.assert('hello'.charAt(0) === 'h');
  console.assert(1 + '2' === '12');
  console.assert('8' / '2' === 4);

  const man = {};
  man.name = 'gg';
  man.age = 20;
  console.log(man.age);
  // man = {}; // error
};
