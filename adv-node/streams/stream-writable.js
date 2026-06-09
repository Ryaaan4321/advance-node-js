import { Writable } from "node:stream";

const logger=new Writable({
    write(chunk,encoding,callback){
        console.log("received this data == ",chunk.toString());
        callback();/* MUST call this — signals "ready for next chunk" */
    }
})
logger.write('hello\n');
logger.write('world\n');
logger.end();

logger.on('finish', () => console.log('Logger done'));

const dbWritter=new Writable({
    objectMode:true,
    write(chunk,encoding,callback){
        console.log("inserting this data ",chunk);
        callback();
    }
})

dbWritter.write({id:1,name:"Alice"});
dbWritter.write({id:2,name:"Bob"});

const writable = new Writable({
  write(chunk, encoding, callback) {
    try {
      const data = JSON.parse(chunk.toString());
      console.log('Parsed:', data);
      callback(); 
    } catch (err) {
      callback(err); 
    }
  }
});

writable.on('error', (err) => {
  console.error('Stream error caught:', err.message);
});

writable.write('{"valid": true}');
writable.write('not valid json');