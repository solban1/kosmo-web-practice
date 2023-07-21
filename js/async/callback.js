export default function () {
  class UserStorage {
    #users;

    constructor() {
      this.#users = new Map();
      this.#users.set('id', 'pw');
      this.#users.set('id2', 'pw2');
    }

    loginUser(id, pwd, onSuccess, onError) {
      setTimeout(() => {
        if (this.#users.has(id)) {
          this.#checkPassword(id, pwd, onSuccess, onError);
        } else {
          onError(new Error('no such id'));
        }
      }, 2000);
    }

    #checkPassword(userId, pwd, onSuccess, onError) {
      setTimeout(() => {
        if (this.#users.get(userId) === pwd) {
          onSuccess(userId);
        } else {
          onError(new Error('wrong password'));
        }
      }, 2000);

    }
  }

  const storage = new UserStorage();
  const userId = prompt('id');
  const pwd = prompt('pw');

  storage.loginUser(
    userId, pwd,
    (id) => console.log('Welcome ' + id),
    (err) => console.log(err)
  );
}
