import { Worker } from "node:worker_threads";
const shared=new SharedArrayBuffer(8);
const view=new Int32Array(shared);
view[0]=0;
view[1]=0;

const w1 = new Worker('./w1.js', {
    workerData: { shared }
});

const w2 = new Worker('./w2.js', {
    workerData: { shared }
});
setInterval(() => {
    console.log("view 0 from the main thread ",view[0]);
    console.log("view 1 from the main thread ",view[1])
}, 3000);