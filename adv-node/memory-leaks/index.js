import EventEmitter from "node:events";
const emitter=new EventEmitter();
// const arr = [];

// setInterval(() => {
//   arr.push(new Array(10000).fill('leak'));
//   console.log('heapUsed:', Math.round(process.memoryUsage().heapUsed / 1024 / 1024), 'MB');
// }, 500);

// setInterval(() => {
//   const arr = [];
//   arr.push(new Array(10000).fill('leak'));
//   console.log('heapUsed:', Math.round(process.memoryUsage().heapUsed / 1024 / 1024), 'MB');
// // }, 0);

// function setup(){
//     const bigcache=new Array(10000).fill('data');
//     emitter.on('request',()=>{
//         console.log(bigcache.length);
//     })
//     // emitter.removeAllListeners();
// }
// setInterval(()=>{
//     setup();
//     emitter.emit('request')
//     console.log('listeners',emitter.listenerCount('request'))
//     console.log('heapused',Math.round(process.memoryUsage().heapUsed/1024/1024));
// },1000)

// over here the result is not defined error i got because by default i am using the
// strict method but if not than the result will be attached to the global object and
// on each call it will attach the gigantic array into it that will be eventually that big
// that it will crash the server or making this kind of things that defining the variable and then
// using them to store the gigantic arrays in that case also the garbage collectior will not be 
// able to pick it up and eventually it will be added in global object with the giagantic array 
// heavy enough to fail the process;

let result; 
function handleRequest() {
    result= new Array(100000).fill('data');
}
function handleRequest() {
  res1 = new Array(100000).fill('data'); 
}

let result1=new Array(100000).fill('data');
function handleRequest1(){
    
}



setInterval(() => {
  handleRequest();
  console.log('heapUsed:', Math.round(process.memoryUsage().heapUsed / 1024 / 1024), 'MB');
}, 500);