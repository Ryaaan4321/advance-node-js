let x;
console.log(x);
console.log(typeof x);
x=10;
console.log(x);
let x1=null;
console.log(typeof x1);
let x2=null;
console.log("equal == ",x2===x1);
/*
type coercion is the concept of the js where according to the needs of the exp js changes the
type of the value over here 10 is the string but the value we will get will be still 5 becuase it
converts it to number and than divides it is of two types 
implicit and the explicit 

*/
/*implicit  */
console.log("10"/2);// type coercion 
console.log("10 "-2);
console.log("10"+2);

/*explicit  */
console.log(typeof Number("10"));
console.log(typeof String(123));
