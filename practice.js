console.log([] == []);
let arr = [
    {
        name: "aryab",
        sub: "science"
    },
    {
        name: "manoj",
        sub: "sst"
    },
    {
        name: "harshith",
        sub: "science"
    },
    {
        name: "govind",
        sub: "sst"
    },
    {
        name: "himanshu",
        sub: "hindi"
    },
    {
        name: "aman",
        sub: "hindi"
    }
]

function cb(obj) {
    let ans = [];
    if (obj.sub === "science") {
        ans.push(obj.name);
    }
}
// let ans = arr.reduce();
// console.log("ans == ",ans);

let newarr = [1, 2, 3, 4];
let maparr = newarr.map((elem) => elem * 2);
// console.log(maparr);
function check(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
let filterarr = newarr.filter(check);
// console.log(filterarr);

const sum = newarr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

const doubled = newarr.reduce((acc, curr) => {
    acc.push(curr * 2);
    return acc;
}, [])
const even = newarr.reduce((acc, curr) => {
    if (curr % 2 == 0) {
        acc.push(curr);
    }
    return acc;
}, [])

const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];

const groupped = users.reduce((acc, curr) => {
    if (!acc[curr.role]) {
        acc[curr.role] = [];
    }
    acc[curr.role].push(curr);
    return acc;
}, {})
// console.log("groupped == ", groupped);

const material = [
    { name: "pen", price: 10, qty: 2 },
    { name: "book", price: 50, qty: 1 }
]
const grouppedPrice = material.reduce((acc, curr) => {
    console.log(curr);
    acc += curr.price;
    return acc;
}, 0);
console.log(grouppedPrice);

// flatten array 
const flatArray = [1, [2, [3, 4]], 5]
function flatten(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc.push(...flatten(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, [])
}
let sortedArray = flatten(flatArray);
console.log(sortedArray);

function countOccurences(str) {
    return str.split("").reduce((acc, curr) => {
        acc[curr] = (acc[char] || 0) + 1;
        return acc;
    }, {})
}
