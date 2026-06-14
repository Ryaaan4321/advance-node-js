import { stdout } from "node:process";
import { Transform } from "node:stream";

const uppercase=new Transform({
    transform(chunk,encoding,callback){
        callback(null,chunk.toString().toUpperCase());
    }
})

process.stdin.pipe(uppercase).pipe(stdout)
const jsonParser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    try {
      const obj = JSON.parse(chunk.toString());
      callback(null, obj);
    } catch (err) {
      callback(err);
    }
  }
});
jsonParser.on('data', (obj) => {
  console.log('Parsed object:', obj);
});

jsonParser.write('{"id": 1, "name": "Alice"}');
jsonParser.write('{"id": 2, "name": "Bob"}');

const csvParser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n').filter(Boolean);
    for (const line of lines) {
      const [id, name, age] = line.split(',');
      this.push({ id, name, age });
    }
    callback();
  }
});

fs.createReadStream('users.csv')
  .pipe(csvParser)
  .on('data', (row) => console.log('Row:', row));