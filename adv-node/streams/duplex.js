import { Duplex } from "node:stream";

const duplex = new Duplex({
    read(size) {
        this.push('data from readable side\n');
        this.push(null);
    },
    write(chunk, encoding, callback) {
        console.log('Writable side received:', chunk.toString());
        callback();
    }
});
duplex.write('hello');
duplex.on('data', (chunk) => console.log('Readable side:', chunk.toString()));

class MessageStream extends Duplex {
    constructor() {
        super();
        this.messages = []
    }
    _read() {
        const msg = this.messages.shift();
        if (msg) {
            this.push(JSON.stringify(msg) + '\n');
        } else {
            this.push(null)
        }
    }
    _write(chunk, encoding, callback) {
        try {
            const msg = JSON.parse(chunk.toString());
            callback();
        } catch (e) {
            callback(e);
        }
    }
    sendMessage(msg) {
        this.messages.push(msg);
        this.read(0);
    }
}

const stream = new MessageStream();
stream.sendMessage({ type: 'ping', ts: Date.now() });
stream.on('data', (chunk) => console.log('Outgoing:', chunk.toString()));
stream.write('{"type": "pong"}');