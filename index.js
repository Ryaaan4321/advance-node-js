import { Worker } from "node:worker_threads";

const semaphoreBuffer = new SharedArrayBuffer(4);

for (let i = 0; i < 5; i++) {
    new Worker("./node/worker.js", {
        workerData: {
            semaphore: semaphoreBuffer,
            initialCount: 2
        }
    });
}



// import { Worker } from "node:worker_threads";

// const shared=new SharedArrayBuffer(4);
// const lock=new SharedArrayBuffer(4);

// new Worker('./node/worker.js',{
//     workerData:{shared,lock}
// })

// new Worker('./node/worker.js',{
//     workerData:{shared,lock}
// })

// for mutex

