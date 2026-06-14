import { workerData } from "node:worker_threads";

const view=new Int32Array(workerData.shared);
console.log("from w2")
let i=0;
setInterval(() => {
    view[1]=i++;
}, 300);

console.log(workerData);
console.log(workerData.shared);