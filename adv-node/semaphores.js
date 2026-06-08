export default class Semaphore {
    constructor(sab, index, initialCount) {
        this.view = new Int32Array(sab);
        this.index = index;
        Atomics.store(this.view, this.index, initialCount);
    }
    acquire() {
        while (true) {
            const current = Atomics.load(this.view, this.index);
            if (current > 0) {
                const old = Atomics.compareExchange(this.view, this.index, current, current - 1);
                if (old == current) {
                    return;
                }
                continue;
            }
            Atomics.wait(this.view,this.index,0);
        }
    }
    release(){
        Atomics.add(this.view,this.index,1);
        Atomics.notify(this.view,this.index,1);
    }
}