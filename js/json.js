export default function() {
  const parrot = {
    name: 'pp',
    color: 'yellowgreen',
    size: null,
    birthDate: new Date('2019-01-01'),
    speak: () => {
      console.log(' speaks');
    }
  };

  const json = JSON.stringify(parrot);
  console.log(parrot.speak());
  console.log(typeof JSON.parse(json).birthDate);
  
};