export default function () {
  function testFunc(name) {
    let phrase = 'hello, ' + name;
    say(phrase);
  }

  function say(phrase) {
    alert('Say: ' + phrase);
  }

  testFunc('foo');
}