function reverse(s) {
    let arr = s.split("");
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr.join("")
}
let reverseString = reverse("bac");

function duplicatesInArray(arr) {
    let maparr = new Map();
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (maparr.has(value)) {
            maparr.set(value, maparr.get(value) + 1);
        } else {
            maparr.set(value, 1);
        }
    }
    let duplicate = -1;
    for (const [key, value] of maparr) {
        if (value > 1) {
            duplicate = key;
            break;
        }
    }
    // console.log(duplicate);
    return duplicate;
}
let arr = [1, 2, 2, 3, 4];
duplicatesInArray(arr)

function primeCheck(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
let sm = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
let even = arr.reduce((acc, curr) => {
    if (curr % 2 == 0) {
        acc.push(curr);
    }
    return acc;
}, []);
let odd = arr.reduce((acc, curr) => {
    if (curr & 1) {
        acc.push(curr);
    }
    return acc;
}, [])
let seen = new Map();
let unique = arr.reduce((acc, curr) => {
    if (!seen.has(curr)) {
        acc.push(curr);
        seen.set(curr, true);
    }
    return acc;
}, []);
let nestedArray = [[1, 2, 3], [4, 5], [7, [9, 90]]];
function flatten(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            // console.log("recursion call = ", ...flatten(curr));
            acc.push(...flatten(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, [])
}
let map = new Map();
function occ(s) {
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
}
occ("aastdf");
for (const [key, value] of map) {
    // console.log(key, value);
}

function fibb(n) {
    if (n <= 1) return n;
    return fibb(n - 1) + fibb(n - 2);
}
let fib = fibb(3);
// console.log("fib == ",fib);
// console.log("odd = ", odd);
// console.log("sm == ", even);
// console.log("unique = ", unique);
// console.log("flatten == ", flatten(nestedArray));


const user1 = { name: "Aryan" };
const user2 = { name: "Rohit" };

function greet(city, country) {
    // console.log(`Hi ${this.name} from ${city}, ${country}`);
}
// greet.call(user1,"Delhi","India");
// greet.call(user2,"Mumbai","India");

// console.log("from the apply afterwards")
// greet.apply(user1,["Delhi","India"]);
// greet.apply(user2,["Mumbai","India"]);

const car={
    brand:"Tesla"
}
function showBrand(){
    // console.log(this.brand);
}
const carBrand=showBrand.bind(car);

const user={
    name:"aryan",
    sayHi(){
        console.log(this.name);
    }
}

const newuser=Object.create(user);

newuser.sayHi();
Object.assign
// why we have to do this in bind to store the result in the variables
// and than call it ,
// because whenever we use the bind it returns a new function
// and to retrieve the result we need to call it.
const bindFunction=user.sayHi.bind(user);
// user.sayHi.bind(user)() 
// bindFunction();


function debounce(fn, delay) {
    let timer;

    return function (...args) {
        // console.log(args);
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
debounce(() => {
    // console.log(text);
}, 1000)