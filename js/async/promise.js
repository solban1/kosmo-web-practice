export default function () {
  // function lazyLoad(timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => console.log('done'), timeout);
  //     reject('fail');
  //     resolve('success');
  //   });
  // }

  // lazyLoad(1000)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  // let a = 0;
  // const p = new Promise((resolve, reject) => {
  //   a++;
  //   resolve('r');
  //   reject('e');
  // });
  // // console.log(Promise.)
  // console.log(a);
  // p.then((v) => {
  //   console.log('fulfilled: ' + v);
  //   return Promise.reject('ee');
  // }).catch((e) => {
  //   console.log('rejected: ' + e);
  // });

  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('암탉'), Math.random() * 2000);
      setTimeout(() => reject('암탉이 죽어버렸습니다.'), 1500);
    });
  const getEgg = (hen) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(hen + ' -> 계란'), Math.random() * 2000);
      setTimeout(() => reject('계란이 썩어버렸습니다.'), 1500);
    });
  const cook = (egg) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(egg + ' -> 후라이'), Math.random() * 2000);
      setTimeout(() => reject('요리를 태워버렸습니다.'), 1500);
    });

  getHen().then(getEgg).then(cook).then(console.log).catch(console.error);
}
