import { Readable } from "node:stream";
import fs from 'fs'
const readable=new Readable({read(){}});

readable.push('first chunk\n');
readable.push('second chunk\n');
readable.push('third push\n');
readable.push(null)

//push null is the indicator that we dont have the data left that needs the processing


readable.on('data',(chunk)=>{
    console.log("chunk : ",chunk.toString());
})

let count=0;
const counter=new Readable({
    read(){
        if(count<=5){
            this.push(`item-${count}\n`);
            count++;
            console.log();
        }else{
            this.push(null);
        }
    }
})


counter.pipe(process.stdout);
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const userStream=new Readable({
    objectMode:true,
    read(){
        const user=users.shift();
        if(user){
            this.push(user);
        }else{
            this.push(null)
        }
    }
})

userStream.on('data',(chunk)=>{
    console.log('processing data = ',chunk);
})

async function largeProcessing(){
    const stream=fs.createReadStream('file.txt',{highWaterMark:5});
    try{
        console.log("from the largeProcessing function");
        for await (const chunk of stream){
            console.log(chunk.toString());
            console.log("one chunk got consoled out");
        }
        console.log("we are doneee here");
    }catch(e){
        console.log("errro r== ",e);
    }
}
largeProcessing();