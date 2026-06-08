

const arr=[1,2,3,4,5,8,8,8,8,8];
let ans=[];
arr.filter((number,idx,arr)=>{
    while(idx<arr.length){
        if(idx%2==0){
            ans.push(number);
            idx++;
        }
        idx++;
    }
})
let controller =new AbortController();
let signal=controller.signal;
signal
let ans2=[];
// arr.reduce((prev,curr,index,arr)=>{
//     console.log("from inside the reduce");
//     if(arr[index]%3==0){
//         prev+=curr;
//     }
//     index++;
//     console.log("currunt from the reduce == ",curr);
// })
let ans3=[];
arr.map((elm)=>{
    if(elm%2==0){
        ans2.push(elm);
    }
})
// arr.forEach((elm)=>{
//     if(elm%2==0){
//         console.log("value from the for each == ",elm);
//     }else{
//         console.log("not condition from the for each")
//     }
// })

let a=[];
let b=a;


let obj={
    name:"aa"
}
obj.aa=function(){
    // console.log("i am the function of the object");
    return 5;
}
// console.log("when we are calling == ",obj.aa());

let userName = 'John';

function showMessage() {
  let user = userName; 

  let message = 'Hello, ' + user;
//   console.log(message);
}
// console.log( userName );
showMessage();
// console.log( userName );


