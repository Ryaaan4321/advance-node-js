import { Worker } from "node:worker_threads";

const sharedBuffer=new SharedArrayBuffer(4);
const counter=new Int32Array(sharedBuffer);

const worker1=new Worker('./sharedBuffer.js',{
    workerData:sharedBuffer
})
const worker2=new Worker('./sharedBuffer.js',{
    workerData:sharedBuffer
})

let exited = 0;

function onExit() {
  exited++;

  if (exited === 2) {
    console.log(counter[0]);
  }
}

worker1.on('exit', onExit);
worker2.on('exit', onExit);