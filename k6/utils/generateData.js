import { randomString } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export function generateUserData() {
  const timestamp = new Date().getTime();
  return {
    nome: `User_${randomString(5)}`,
    email: `user_${timestamp}@test.com`,
    password: randomString(8),
    administrador: 'true',
  };
}
