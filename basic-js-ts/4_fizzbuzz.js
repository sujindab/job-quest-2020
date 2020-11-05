
function fizzbuzz(num) {
    switch (true) {
        case num%3===0 && num%5===0:
            console.log(num," FizzBuzz")
            return "FizzBuzz"
        case num%3===0:
            console.log(num," Fizz")
            return "Fizz"
        case num%5===0:
            console.log(num," Buzz")
            return "Buzz"
    }
    
}

var a=fizzbuzz(21)
var b=fizzbuzz(25)
var c=fizzbuzz(45)

console.log(a)
console.log(b)
console.log(c)