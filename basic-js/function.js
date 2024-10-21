code :- 

// function myFunction(){
//     console.log("today is a beautiful day");
//     console.log("we learn function in javascript");
// }

// myFunction()
// myFunction()

// function myFunction(msg){ // msg is your parameter
//     console.log(msg)
// }
// myFunction("development"); // development is your argument

// write a function to take 2 numbers and print their sum.

// function sum(a,b){
//     console.log(a*b)
// }
// sum(2,3)
// sum(3456,78)

// function sum(x, y) {
//     z = x + y
//     console.log("before return")
//     return z;
//     console.log("afetr return")
// }
// let val = sum(2, 3)
// console.log(val)
// return statement will terminate the function so after return 
// statement , other statement will not executed


// create a function using the "function" keyword that takes a string,
// as an arguments & returns the number of vowels in the string ??
// (TCS interview question)

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }   
//     }
//     console.log(count);
// }
// countVowels("javascript")

const printHello = () => {
    console.log("hello")
}

printHello()

// create a function using the "function" keyword that takes a string,
// as an arguments & returns the number of vowels in the string ??
// (TCS interview question)(arrow function)

const countVowel = (str) => {
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++;
        }   
    }
    console.log(count);
}
countVowels("javascript")