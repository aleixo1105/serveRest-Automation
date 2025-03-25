import { check } from 'k6';
import http from 'k6/http';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Configuração do teste
export const options = {
  vus: 10, // 10 usuários simultâneos
  duration: '10s', // Teste rodando por 10 segundos
};

export default function () {
  const url = 'https://serverest.dev/usuarios';

  // Geração de dados 100% únicos
  const timestamp = new Date().getTime(); // Obtém timestamp atual em milissegundos
  const nome = `User_${randomString(5)}`;
  const email = `user_${timestamp}@test.com`; // Garante que o email seja sempre único
  const password = randomString(8); // Senha aleatória de 8 caracteres

  const payload = JSON.stringify({
    nome: nome,
    email: email,
    password: password,
    administrador: 'true',
  });

  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const res = http.post(url, payload, { headers });

  // Validação: Agora só aceita status 201
  check(res, {
    'status é 201': (r) => r.status === 201,
  });
}

// 📌 Geração automática do relatório HTML
export function handleSummary(data) {
  return {
    "k6-tests/summary.html": htmlReport(data),
  };
}
