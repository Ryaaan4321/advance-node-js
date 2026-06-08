import http from 'http'
import cluster from 'cluster'
import os from 'os'

const numCPU = os.cpus().length
if (cluster.isPrimary) {
    console.log(`Primary worker ${process.pid} is running`)
    for (let i = 0; i < numCPU; i++) {
        cluster.fork();
    } cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });

} else {
    // worker creates the server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Handled by worker ${process.pid}\n`);
    }).listen(3000);

    console.log(`Worker ${process.pid} started`);
}