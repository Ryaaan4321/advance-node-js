import { workerData } from "node:worker_threads";
console.log("mutex got called");
export default class Mutex{
    constructor(sab,index=0){
        this.view=new Int32Array(sab);
        this.index=index;
        // Atomics.store(this.view,this.index,0);
    }
    lock(){
        console.log("trying to lock");
        while(1){
            const old=Atomics.compareExchange(this.view,this.index,0,1);
            if(old==0){
                console.log("lock acquired")
                return;
            }
            console.log("waiting")
            Atomics.wait(this.view,this.index,0);
        }
    }
    unlock(){
        console.log("unlocking")
        Atomics.store(this.view,this.index,0);
        Atomics.notify(this.view,this.index,1)
    }
    withLock(fn){
        this.lock();
        try{
            return fn();
        }finally{
            this.unlock();
        }
    }
}
