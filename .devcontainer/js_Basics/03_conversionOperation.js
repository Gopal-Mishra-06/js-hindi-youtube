let stringId = "33"

// Now convert into Number

var NumberId = Number(stringId)

console.log(NumberId)
console.log(typeof(NumberId))  // it got converted into number


let stringNull = null 
var nullNumber = Number(stringNull)
console.log(typeof(nullNumber))
console.log(nullNumber);  // got value 0

let stringundefined = undefined
var undefinedNumber = Number(stringundefined)
console.log(undefinedNumber) // we will get NaN(Not a Number)

let stringBool = true 
var boolNum = Number(stringBool)
console.log(boolNum);  // we will get value 1(true) and (0) false

let stringWithAlpha = "33fsgedfg"
var stringNumber = Number(stringWithAlpha)
console.log(stringNumber); // NaN

let emptyString = ""
let emptyNumber = Number(emptyString)
console.log(emptyNumber); // 0 

let namea = "Gopal"
let nameNumber = Number(namea)
console.log(nameNumber); // NaN


