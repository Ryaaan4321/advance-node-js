import { workerData } from "node:worker_threads";

const view=new Int32Array(workerData.shared);
console.log("from w1")
let i=0;
setInterval(() => {
    view[0]=i++;
}, 300);