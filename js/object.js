export default function() {
  const obj = {};
  obj.name = 'test'; // add a property
  obj['name']; // computed property
  delete obj.name; // delete a property

  const a = 1;
  const b = 2;
  const obj2 = { a, b };
  console.log(obj2); // { a: 1, b: 2 } *****

  console.log('a' in obj2);
  console.log('aaaa' in obj2);
  for (const [key, value] of Object.entries(obj2)) {
    console.log(key, value);
  }

  const obj3 = obj2; // not cloned; referenced instead
  const obj4 = {}; // cloning obj2 classic way
  for (const key in obj2) {
    obj4[key] = obj2[key];
  }
  const obj5 = Object.asdfhaieh;
};
