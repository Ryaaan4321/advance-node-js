import fs, { write } from 'fs'

// const writabel=fs.createWriteStream('output.txt');
// writabel.write('first line\n');
// writabel.write('second line\n');
// writabel.write('third line\n');
// writabel.end('last line\n');

// writabel.on('finish',()=>{
//     console.log("All data is written")
// })

const writable = fs.createWriteStream('output.txt');
const readable = fs.createReadStream('file.txt',{highWaterMark:5});

readable.on('data', (chunk) => {
    const ok = writable.write(chunk);
    /*over here we are manully handling the backpressure when the ok is ok that means 
    there are some problem in the readable side or in the writable side and hence that's why it is 
    important*/
    if (!ok) {
        readable.pause();
        writable.once('drain', () => {
            readable.resume();
        })
    }
})

readable.on('end', () => {
    writable.end();
});

