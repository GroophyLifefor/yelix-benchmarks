# Yelix

- Env: `deno`

```
execution: local
        script: yelix.js
        output: -

     scenarios: (100.00%) 2 scenarios, 300 max VUs, 2m30s max duration (incl. graceful stop):
              * constant_load: 100 looping VUs for 1m0s (gracefulStop: 30s)
              * stress_test: Up to 200 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, startTime: 1m0s, gracefulStop: 30s)


     ✓ status is 200
     ✓ response body not empty

     checks.........................: 100.00% 8911876 out of 8911876
     data_received..................: 677 MB  5.6 MB/s
     data_sent......................: 397 MB  3.3 MB/s
     failure_rate...................: 0.00%   0 out of 4455938
     http_req_blocked...............: avg=1.92µs   min=0s med=0s     max=23.57ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=31ns     min=0s med=0s     max=2.58ms  p(90)=0s     p(95)=0s
   ✓ http_req_duration..............: avg=3.28ms   min=0s med=2.68ms max=46.36ms p(90)=5.66ms p(95)=6.18ms
       { expected_response:true }...: avg=3.28ms   min=0s med=2.68ms max=46.36ms p(90)=5.66ms p(95)=6.18ms
   ✓ http_req_failed................: 0.00%   0 out of 4455938
     http_req_receiving.............: avg=23.14µs  min=0s med=0s     max=33.31ms p(90)=0s     p(95)=0s
     http_req_sending...............: avg=7.52µs   min=0s med=0s     max=40.83ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.25ms   min=0s med=2.67ms max=32ms    p(90)=5.6ms  p(95)=6.13ms
     http_reqs......................: 4455938 37132.794325/s
     iteration_duration.............: avg=3.35ms   min=0s med=2.71ms max=46.36ms p(90)=5.76ms p(95)=6.29ms
     iterations.....................: 4455938 37132.794325/s
     request_duration...............: avg=3.319889 min=0  med=3      max=46      p(90)=6      p(95)=6
     success_rate...................: 100.00% 4455938 out of 4455938
     vus............................: 1       min=1                  max=200
     vus_max........................: 300     min=300                max=300
```

# Hono

- Env: `deno`

```
execution: local
        script: hono.js
        output: -

     scenarios: (100.00%) 2 scenarios, 300 max VUs, 2m30s max duration (incl. graceful stop):
              * constant_load: 100 looping VUs for 1m0s (gracefulStop: 30s)
              * stress_test: Up to 200 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, startTime: 1m0s, gracefulStop: 30s)


     ✓ status is 200
     ✓ response body not empty

     checks.........................: 100.00% 9490894 out of 9490894
     data_received..................: 717 MB  6.0 MB/s
     data_sent......................: 422 MB  3.5 MB/s
     failure_rate...................: 0.00%   0 out of 4745447
     http_req_blocked...............: avg=1.88µs   min=0s med=0s     max=9.91ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=38ns     min=0s med=0s     max=5.72ms  p(90)=0s     p(95)=0s
   ✓ http_req_duration..............: avg=3.08ms   min=0s med=2.61ms max=48.67ms p(90)=5.35ms p(95)=5.81ms
       { expected_response:true }...: avg=3.08ms   min=0s med=2.61ms max=48.67ms p(90)=5.35ms p(95)=5.81ms
   ✓ http_req_failed................: 0.00%   0 out of 4745447
     http_req_receiving.............: avg=21.47µs  min=0s med=0s     max=45.48ms p(90)=0s     p(95)=0s
     http_req_sending...............: avg=7.19µs   min=0s med=0s     max=13.33ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.05ms   min=0s med=2.6ms  max=41.96ms p(90)=5.34ms p(95)=5.78ms
     http_reqs......................: 4745447 39545.219348/s
     iteration_duration.............: avg=3.15ms   min=0s med=2.63ms max=48.67ms p(90)=5.4ms  p(95)=5.87ms
     iterations.....................: 4745447 39545.219348/s
     request_duration...............: avg=3.116057 min=0  med=3      max=49      p(90)=6      p(95)=6
     success_rate...................: 100.00% 4745447 out of 4745447
     vus............................: 1       min=1                  max=200
     vus_max........................: 300     min=300                max=300
```

# Oak

- Env: `deno`

```
execution: local
        script: oak.js
        output: -

     scenarios: (100.00%) 2 scenarios, 300 max VUs, 2m30s max duration (incl. graceful stop):        
              * stress_test: Up to 200 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, startTime: 1m0s, gracefulStop: 30s)   


     ✓ status is 200
     ✓ response body not empty

     checks.........................: 100.00% 5810998 out of 5810998
     data_received..................: 439 MB  3.7 MB/s
     data_sent......................: 259 MB  2.2 MB/s
     failure_rate...................: 0.00%   0 out of 2905499
     http_req_blocked...............: avg=2.16µs   min=0s med=0s     max=13.16ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=40ns     min=0s med=0s     max=4.08ms  p(90)=0s     p(95)=0s
   ✓ http_req_duration..............: avg=5.07ms   min=0s med=4.34ms max=44.01ms p(90)=8.37ms p(95)=9.24ms
       { expected_response:true }...: avg=5.07ms   min=0s med=4.34ms max=44.01ms p(90)=8.37ms p(95)=9.24ms
   ✓ http_req_failed................: 0.00%   0 out of 2905499
     http_req_receiving.............: avg=26.09µs  min=0s med=0s     max=27.12ms p(90)=0s     p(95)=115.8µs
     http_req_sending...............: avg=7.92µs   min=0s med=0s     max=17.99ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=5.04ms   min=0s med=4.3ms  max=39.3ms  p(90)=8.33ms p(95)=9.19ms
     http_reqs......................: 2905499 24212.437673/s
     iteration_duration.............: avg=5.15ms   min=0s med=4.42ms max=47.77ms p(90)=8.45ms p(95)=9.34ms
     iterations.....................: 2905499 24212.437673/s
     request_duration...............: avg=5.111524 min=0  med=4      max=48      p(90)=8      p(95)=9
     success_rate...................: 100.00% 2905499 out of 2905499
     vus............................: 1       min=1                  max=200
     vus_max........................: 300     min=300                max=300
```

# Express.js

- Env: `nodejs`

```
 execution: local
        script: express.js
        output: -

     scenarios: (100.00%) 2 scenarios, 300 max VUs, 2m30s max duration (incl. graceful stop):
              * constant_load: 100 looping VUs for 1m0s (gracefulStop: 30s)
              * stress_test: Up to 200 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, startTime: 1m0s, gracefulStop: 30s)   


     ✓ status is 200
     ✓ response body not empty

     checks.........................: 100.00% 2083944 out of 2083944
     data_received..................: 249 MB  2.1 MB/s
     data_sent......................: 93 MB   773 kB/s
     failure_rate...................: 0.00%   0 out of 1041972
     http_req_blocked...............: avg=1.4µs     min=0s med=0s      max=6.5ms    p(90)=0s      p(95)=0s
     http_req_connecting............: avg=61ns      min=0s med=0s      max=2.47ms   p(90)=0s      p(95)=0s
   ✓ http_req_duration..............: avg=14.33ms   min=0s med=12.14ms max=99.21ms  p(90)=23.68ms p(95)=25.27ms
       { expected_response:true }...: avg=14.33ms   min=0s med=12.14ms max=99.21ms  p(90)=23.68ms p(95)=25.27ms
   ✓ http_req_failed................: 0.00%   0 out of 1041972
     http_req_receiving.............: avg=21.21µs   min=0s med=0s      max=9.94ms   p(90)=0s      p(95)=0s
     http_req_sending...............: avg=6.16µs    min=0s med=0s      max=7.04ms   p(90)=0s      p(95)=0s
     http_req_tls_handshaking.......: avg=0s        min=0s med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=14.31ms   min=0s med=12.1ms  max=99.21ms  p(90)=23.65ms p(95)=25.24ms
     http_reqs......................: 1041972 8683.073148/s
     iteration_duration.............: avg=14.38ms   min=0s med=12.19ms max=100.86ms p(90)=23.73ms p(95)=25.33ms
     iterations.....................: 1041972 8683.073148/s
     request_duration...............: avg=14.360556 min=0  med=12      max=100      p(90)=24      p(95)=25
     success_rate...................: 100.00% 1041972 out of 1041972
     vus............................: 1       min=1                  max=200
     vus_max........................: 300     min=300                max=300
```

# fastify

- Env: `nodejs`

```
   execution: local
        script: fastify.js
        output: -

     scenarios: (100.00%) 2 scenarios, 300 max VUs, 2m30s max duration (incl. graceful stop):
              * constant_load: 100 looping VUs for 1m0s (gracefulStop: 30s)
              * stress_test: Up to 200 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, startTime: 1m0s, gracefulStop: 30s)   


     ✓ status is 200
     ✓ response body not empty

     checks.........................: 100.00% 7801224 out of 7801224
     data_received..................: 690 MB  5.8 MB/s
     data_sent......................: 347 MB  2.9 MB/s
     failure_rate...................: 0.00%   0 out of 3900612
     http_req_blocked...............: avg=1.73µs   min=0s med=0s     max=45.02ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=20ns     min=0s med=0s     max=2.96ms  p(90)=0s     p(95)=0s
   ✓ http_req_duration..............: avg=3.77ms   min=0s med=3.4ms  max=57.21ms p(90)=8.04ms p(95)=9.94ms
       { expected_response:true }...: avg=3.77ms   min=0s med=3.4ms  max=57.21ms p(90)=8.04ms p(95)=9.94ms
   ✓ http_req_failed................: 0.00%   0 out of 3900612
     http_req_receiving.............: avg=20.6µs   min=0s med=0s     max=29.24ms p(90)=0s     p(95)=0s
     http_req_sending...............: avg=6.47µs   min=0s med=0s     max=38.87ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.75ms   min=0s med=3.31ms max=57.13ms p(90)=8.03ms p(95)=9.92ms
     http_reqs......................: 3900612 32504.804342/s
     iteration_duration.............: avg=3.83ms   min=0s med=3.51ms max=57.21ms p(90)=8.09ms p(95)=9.99ms
     iterations.....................: 3900612 32504.804342/s
     request_duration...............: avg=3.805384 min=0  med=3      max=57      p(90)=8      p(95)=10
     success_rate...................: 100.00% 3900612 out of 3900612
     vus............................: 1       min=1                  max=200
     vus_max........................: 300     min=300                max=300
```