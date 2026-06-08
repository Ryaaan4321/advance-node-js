import fs, { read } from 'fs'

const readable=fs.createReadStream('file.txt',{highWaterMark:64*1024})

readable.on('data',(chunk)=>{
    console.log("got the data : ",chunk);
    console.log("length of the data : ",chunk.length);
})
readable.on('end',(chunk)=>{
    console.log("no more data left in that file");
})
// readable.
readable.on('error',(chunk)=>{
    console.log("Stream error on chunk while processing the file :",chunk);
})