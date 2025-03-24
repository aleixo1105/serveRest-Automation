import http from 'k6/http';
import { sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/');
    sleep(1);
}

export function handleSummary(data) {
    return {
        'result.html': textSummary(data, { indent: ' ', enableColors: true }),
        'stdout': textSummary(data, { indent: ' ', enableColors: true }) // Exibe no console
    };
}
