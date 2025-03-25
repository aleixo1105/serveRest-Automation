import { createUserTest } from './tests/userTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Configuração do teste
export const options = {
  vus: 10, // 10 usuários simultâneos
  duration: '10s', // Teste rodando por 10 segundos
};

export default function () {
  createUserTest();
}

// 📌 Geração automática do relatório HTML
export function handleSummary(data) {
  return {
    "k6/reports/summary.html": htmlReport(data),
  };
}
