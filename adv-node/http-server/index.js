import { resolve } from 'dns';
import http from 'http'

const server=http.createServer((req,res)=>{
    setTimeout(() => {
        res.writeHead(200);
        res.end('ok');
    }, 2000);
})

server.listen(3000)


// async function makeRequest(id) {
//     return new Promise((resolve,reject)=>{
//         const start=Date.now();
//         const request=http.request({host:'localhost',port:3000,path:'/'},(res)=>{
//             res.resume();
//             res.on('end',()=>{
//                 console.log(`Request ${id} is completed at ${Date.now()-start}ms`)
//                 resolve();
//             })
//         });
//         request.on('error',reject);
//         request.end();
//     })
// }

// now the problem in this approach i can attach as many caller as many i want to call the server
// and that can hamper the performance of the server and to prevent it we use the agent;

const limitedAgent=new http.Agent({
    keepAlive:true,
    maxSockets:30,
    maxFreeSockets:7
})
async function makeRequest1(id) {
    return new Promise((resolve,reject)=>{
        const start=Date.now();
        const request=http.request({host:'localhost',port:3000,path:'/',agent:limitedAgent},(res)=>{
            res.resume();
            res.on('end',()=>{
                console.log(`Request ${id} is completed at ${Date.now()-start}ms`)
                resolve();
            })
        });
        request.on('error',reject);
        request.end();
    })
}

// but now we had attached the agent now only 2 request can access the server at a time so this are the
// logs of the execution
/*
--- Firing 5 concurrent requests ---
Request 1 is completed at 2070ms
Request 2 is completed at 2057ms
Request 3 is completed at 4068ms
Request 4 is completed at 4069ms
Request 5 is completed at 6072ms
Total: 6090ms
*/
async function leakyRequest(id) {
    return new Promise((resolve, reject) => {
        const req = http.request(
            { host: 'localhost', port: 3000, path: '/', agent: limitedAgent },
            (res) => {
                // BUG: never drain res, never call res.resume()
                // socket is never returned to the pool
                resolve(); // we resolve the promise but the socket is stuck
            }
        );
        req.on('error', reject);
        req.end();
    });
}

async function main() {
  const t = Date.now();
  await Promise.all([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(leakyRequest));
  console.log(`Total: ${Date.now() - t}ms`);
}
main().then(()=>server.close());
