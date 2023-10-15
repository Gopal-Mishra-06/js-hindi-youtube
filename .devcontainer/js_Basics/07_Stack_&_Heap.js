// stack (primitive datatype)
// Heap (Non-primitive datatype)

// The stack provides the copy of the data. The both values will be different.

let a = "Sadhana"
let b = a 
b = "pandey"

console.log(a); 
console.log(b);

// Heap gives the reference of the data. The both values will be same.

let firstName = {
    person : "gopal",
    age : 23
}

let secondPerson = firstName
secondPerson.person = "Mishra"
console.log(firstName.person);
console.log(secondPerson.person)