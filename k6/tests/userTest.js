import http from 'k6/http';
import { check } from 'k6';
import { generateUserData } from '../utils/generateData.js';

export function createUserTest() {
  const url = 'https://serverest.dev/usuarios';
  const payload = JSON.stringify(generateUserData());

  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const res = http.post(url, payload, { headers });

  check(res, {
    'status é 201': (r) => r.status === 201,
  });
}
