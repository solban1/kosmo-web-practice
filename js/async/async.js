export default async function () {
  function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }
  
  class UserStorage {
    async loginUser(id, pwd) {
      await delay(2000);
      if (
        (id === 'khs' && pwd === '1234') ||
        (id === 'soo' && pwd === '1234')
      ) {
        return id;
      } else {
        throw new Error('not found');
      }
    }

    async getRoles(id) {
      await delay(1000);
      if (id === 'khs') {
        return { name: 'khs', role: 'admin' };
      } else {
        throw new Error('no access');
      }
    }
  }

  const storage = new UserStorage();
  const id = prompt('enter your id');
  const pwd = prompt('enter your pwd');
  try {
    const loginId = await storage.loginUser(id, pwd);
    const userWithRole = await storage.getRoles(loginId);
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  } catch (error) {
    console.log(error);
  }
}
