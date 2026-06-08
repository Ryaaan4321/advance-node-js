setTimeout(() => {
    setTimeout(() => {
        console.log("from the timeout inside the timout");
    }, 0);
    const newProm = new Promise((res, rej) => {
        res("we did it from the timeout");
        rej("we couldnt ");
    })
    console.log("console.log from the timeout");
    newProm
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}, 2000);
console.log("from the conosle.log");

const prom = new Promise((res, rej) => {
    res("we resolved it");
    rej("we couldn't");
})
prom.
    then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finall"));

console.log("heelo from the console");
setTimeout(() => {
    console.log("hello from the tiemout")
}, 1);

setTimeout(() => {
    console.log("hello from the second timeout");
}, 2);

const prom1 = new Promise((res, rej) => {
    console.log("from the inside of the promise");
    res("from the res");
    rej("from the rej");
})
prom1
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const prom2=new Promise((res,rej)=>{
    console.log("from the second promise");
    res("");
    rej("");
})
prom2.then((res)=>console.log(res))
.catch((err)=>console.log(err));
console.log(prom2);