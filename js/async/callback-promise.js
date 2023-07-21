'use strict';

class UserStorage {
  loginUser(id, pwd) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'khs' && pwd === '1234') ||
          (id === 'soo' && pwd === '1234')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'khs') {
          resolve({ name: 'khs', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const storage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your pwd');
storage
  .loginUser(id, pwd)
  .then(storage.getRoles)
  .then((userWithRole) => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  })
  .catch(console.log);
