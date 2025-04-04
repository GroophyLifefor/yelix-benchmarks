import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

// Custom metrics
const successRate = new Rate('success_rate');
const failureRate = new Rate('failure_rate');
const requestDuration = new Trend('request_duration');

export const options = {
  scenarios: {
    constant_load: {
      executor: 'constant-vus',
      vus: 100,
      duration: '60s',
    },
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 200 },  // Ramp up to 200 users
        { duration: '30s', target: 200 },  // Stay at 200 for 30 seconds
        { duration: '10s', target: 0 }     // Ramp down to 0 users
      ],
      startTime: '60s',  // Start after the constant load test
    }
  },
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% of requests should complete below 500ms
    http_req_failed: ['rate<0.1'],     // Less than 10% of requests should fail
  }
};

export default function() {
  // Make the request without any sleep to test maximum performance
  const start = new Date();
  const response = http.get('http://localhost:3033/api/hello');
  const end = new Date();
  
  // Calculate the duration in milliseconds
  const duration = end - start;
  requestDuration.add(duration);
  
  // Check if the request was successful
  const success = check(response, {
    'status is 200': (r) => r.status === 200,
    'response body not empty': (r) => r.body.length > 0,
  });
  
  // Record success or failure
  successRate.add(success);
  failureRate.add(!success);
  
  // Optional - small sleep to prevent overwhelming the system completely
  // Remove this line to test absolute maximum capacity
  // sleep(0.01); // 10ms sleep
}