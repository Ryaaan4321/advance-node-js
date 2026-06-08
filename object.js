const person = {
    isHuman: false,
    printIntroduction() {
        console.log(`My name is ${this.name} . Am i Humans ${this.isHuman}`)
    }
}
const me = Object.create(person);
me.isHuman = true;
me.name = "Matthew"
// console.log("prototype == ",Object.getPrototypeOf(me)==person);
/*
What exactly is the object prototype here?

We have two objects: `me` and `person`.

`me` does not have the `printIntroduction()` function,
but we can still call it because when we use
`Object.create(person)`, JavaScript creates a new object
whose prototype is `person`.

This means that if a property is not found on `me`,
JavaScript looks for it on `person`.

That is why `me.printIntroduction()` works even though
the method is not directly defined on `me`.

However, this lookup only works in one direction.
If a property exists on `me` but not on `person`,
`person` cannot access it.

So:
`me` → can access `person`'s properties  
`person` → cannot access `me`'s properties
*/

const newme=person;
// console.log("prototype === ",Object.getPrototypeOf(newme)==person);

/*
But Aryan, why does this give false?
Slow down. Slow down.
Because `newme` is NOT a new object.
It is just another reference to the SAME object as `person`.
So this comparison:
Object.getPrototypeOf(newme) === person
actually becomes:
Object.getPrototypeOf(person) === person
But the prototype of `person` is `Object.prototype`,
not `person` itself.
And an object can never be its own prototype.
That is why this expression evaluates to false.
*/


const o = new Object(me);
// console.log("o == ", o);
// console.log("comp == ", o == me);
/*
When we do o == me,
it evaluates to true because Object.create(obj) does not create a clone,
wrapper, or copy of the object. It does not allocate new memory for a 
new object with the same data.
Instead, it simply creates a new object whose prototype points to obj.
So the reference remains effectively the same in this case —
 it’s like ज्यों का त्यों .
*/
// console.log("comp2 == ", o == person);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget=Object.assign(target,source);
console.log("target == ",target);
console.log("returned target == ",returnedTarget);

/*
the question in my mind was why b:4 why not b:2 
and for that in the mdn they have the line that clearly says : 
**Properties in the target object are overwritten by properties 
in the sources if they have the same  
[key](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).
Later sources' properties overwrite earlier ones.
**
so b is present in both of the objects but it will 
overwrites the old one and we will get the new one
so hence that’s why we get the  b:4  not  b:2
*/
// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");
const obj=Object.assign({},v1,v2,v3,v4);
console.log("obj == ",obj);
const src=[{a:1},{b:2},{a:22},{f:2},{c:3}];
const newobject=Object.assign({},...src);
console.log("newobject == ",newobject);