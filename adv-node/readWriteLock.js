class ReadWriteLock{
    constructor(sab,baseIndex=0){
        this.view=new Int32Array(sab);
        this.readerIndex=baseIndex;
        this.writeIndex=baseIndex+1;
        Atomics.store(this.view,this.readerIndex,0);
        Atomics.store(this.view,this.writeIndex,0);
    }
    readLock(){
        while(true){
            while(Atomics.load(this.view,this.writeIndex)===1){
                Atomics.wait(this.view,this.writeIndex,);
            }
            Atomics.add(this.view,this.readerIndex,1);
            if(Atomics.load(this.view,this.writeIndex)===0){
                return;
            }
            Atomics.compareExchange(this.view,this.readerIndex,1);
            Atomics.notify(this.view,this.readerIndex);
        }
    }
    readUnlock(){
        const reamaining=Atomics.sub(this.view,this.readerIndex,1);
        if(reamaining==1){
            Atomics.notify(this.view,this.readerIndex,1);
        }
    }
    writeLock(){
        while(true){
            const old=Atomics.compareExchange(this.view,this.writeIndex,0,1);
            if(old==0){
                break;
            }
            Atomics.wait(this.view,this.writeIndex,1);
        }
        while(Atomics.load(this.view,this.readerIndex)>0){
            Atomics.wait(this.view,this.writeIndex,Atomics.load(this.view,this.readerIndex));
        }
    }
    writeUnlock(){
        Atomics.store(this.view,this.writeIndex,0);
        Atomics.notify(this.view,this.writeIndex,Infinity)
        pack
    }
}