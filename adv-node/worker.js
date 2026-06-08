// import { workerData } from 'node:worker_threads';
// import Mutex from './mutex.js';

// const view = new Int32Array(workerData.shared);
// const mutex = new Mutex(workerData.lock);

// console.log('before lock');

// mutex.withLock(() => {
//     const current = Atomics.load(view, 0);
//     console.log('current =', current);
//     Atomics.store(view, 0, current + 1);
// });

//  above one was for mutex
import { workerData, threadId } from "node:worker_threads";
import Semaphore from "./semaphores.js";

const semaphore = new Semaphore(
    workerData.semaphore,
    0,
    workerData.initialCount
);

console.log(`Worker ${threadId} trying to enter`);

semaphore.acquire();

console.log(`Worker ${threadId} entered`);

setTimeout(() => {
    console.log(`Worker ${threadId} leaving`);

    semaphore.release();
}, 3000);