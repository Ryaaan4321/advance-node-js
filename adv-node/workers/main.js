import { Worker,isMainThread,parentPort,workerData } from "node:worker_threads";
import { fileURLToPath } from "node:url";
const __fileName=fileURLToPath(import.meta.url);
console.log("file path == ",__fileName);
if(isMainThread){
    const worker=new Worker(__fileName,{
        workerData:{number:40}
    });
    worker.on("message",(result)=>{
        console.log("result ",result)
    })
    worker.on("error",(error)=>{
        console.log("error = ",error);
    })
    worker.on("exit",(code)=>{
        if(code!=0){
            console.log("worker executed the code with not equal to 0 ",code);
        }
    })
}else{
    function fib(n){
        if(n<=1)return n;
        return fib(n-1)+fib(n-2);
    }
    const result=fib(workerData.number);
    parentPort.postMessage(result);
}