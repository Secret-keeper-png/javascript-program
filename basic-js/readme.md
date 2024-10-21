Javascript:-

- javascript is used for building logics of a web pages.
- javascript is a high level programming language, used in both client side as well as sever side.
- javascript is comes from echma script  so we see the latest version of jaba script in form of echma script.
- Now we used javascript version 6 i.e ES6 (echma-script 6).
- In another way we called ES6 as the vanilla javascript.
-Nodejs is the run time environment of javascript.

Variable:-
- it is a container to store some data.
- In javascript there are 3types of variable are there ...
1. let:- 
let is a type of variable which is used or changing the variable name later.
- Now these days, most of the cases we used let for creating variable.
-let is a block scope code so we have been used 'let' for most of the cases.

2. var:-
- it is a type of variable which is also used for changing a variable in later stage.
- it is used in oldest browser so now a days we don't use var most of the cases.

3. const:- const means constant.

Rules for creating variable name:-

- variable name are cases sensative "a", & "A" is different.
- Only letter , digit, underscore & special character is allowed ,(not even white space).
- Only letter, underscore or special character should be the 1st character only.
- Ex:- let 3oday_is ="monday"  {error}
- Reserve words cannot be a variable name.
ex:- for , while, switch, do-while, console.

Datatypes in JS:-

- datatype is an attributes associated with a piece of data that tells a computer system how to interprit its value.
- in datatype we used "typeof" operator to know that what type of data it is.
-Mainly in javascript there are 2 types of datatype we used:-

1. Primitive Datatype:-

- in JS there are 7 types of promitive datatype we used:-
1. Number:- number are the type of datatype those it contains some numerical values
2. Boolean:- in boolean datatypes we get boolean value like ture/false.
3. Undefined:- data is not define
4. Null:- in this datatype we get null for the value means nothing.
5.bigInt:- in bigInt we will get the big interger value(-999999999 to +999999999) on the above.
6.string:- it is a type of datatypes that can hold some character like names or woed etc..
7.symbol:- in this we get one symbol of more than one value.

2.Reference Datatype:-

- they are the type of datatype which can hold multiple element in a single time.
- they are -> array, object, function 

1. Array:- 
- it is a datatype where we can store similar type of data is a contigious memory location.
- array indexing starts from"0".
- Ex:- let arr = ["ram","hari","sita","bharat"]
                   0       1      2      3

2. Object:-
- it is a reference datatype where we can store more than one element in a single entity.
- mainly objects are working on (key:value) pair.

ex:- 
  
   let emp1 = {
    "name" : "saba",
    "age" : "20",
    "address" : "bbsr",
    "mobile no" : 2323434213,
    "salary" : 34536644
   }

   - in the above example we can see that the left hand side element are the keys & the right hand side value are the values so we can tell that object is a key:value pair structure.

   3. Function:-
   - in function, we repeatedly do the task in function.
   - function reduce our code complexity and the time & space complexity.
   - Syntax:-
       
          function my_schedule(){
            console.log("we wake up at 6 am")
            console.log("we go for a moring walk")
            console.log("we go to clg")
          }
          // function calling
          my_schedule()


Operator in JS:-
  
  - operator are the key features to do some task or operate some task.
  - Ex:- A + B 
  - in the above example A,B are the operands & "+" is the operator.
  - There are 5 types of operator are present in JS:-

  1. Airthmetic Operator:- (+,-,*,/) , % (modulus), ** (exponentiation)
  2. Logical Operator:- logical AND(&&), logical OR (||), logical NOT(!)
  3. Assignment Operator:- (=,+=, -=, *=, %=,**=)
  4. Unary Operator:- increment (++), decrement(--)
  5.Comparision Operator:- (==, !==, ===, etc...)

  Conditional Statement:-
  - To implement some condition in the code.
  - there are 3 types of conditional statement are there-
  (a) If condition:- 
  - if condition is true then statement is true.
  - syntax:

   if(condition)
   {
   statement
   }

  (b) If-else condition:-
  - if condition is true then statement is true otherwise false.
  - synatax:-

  if(condtion)
  {
  statement
  } else {
  statement 
  }

  (c) if-elif condition:-
  -its check the condition multiple times, where the condtion is true.
  - syntax:

  if(condtion)
  {
  statement
  } else if (condtion){
  statement 
  }
  else if (condtion){
  statement 
  }
  else {
  statement 
  }


LOOPS in javascript:-

- Loops are used to execute a piece of code aain and again.
- there there are 5 types of loops present in JS:-
1. For loop:-

- syntax:-
    
         for(initialization; condition; incre/decre){
          statement
         }

- example:-

              for (let i = 1; i <=5; i++){
                console.log("web bocket")
              }

working/ output:-

a. web bocket
b. web bocket
c. web bocket
d. web bocket
e. web bocket

2. While loop:-

- syntax:-
    
          initialization
          while (condition){
            statement
            inc/ dec
          }


3. Do-while loop:-
- syntax:-

    do {
      statement
      inc/dec
    } while (condition)

4.For-of loop:-  it iterate on string & array.
5. For-in loop:-it iterate over the object

String in JS:- 

- string is a swquency of character used to represent text.
- create a string -> let str = "web bocket"
- we calculate the string length -> str. length property.
- we calculate the string index -> str[0], str[1] ...etc

String Literals:-
- its a way to have embedded expression in string.
- its is denotes by symbol ``.

String Interpolation:-

- to creatr string by doing substitution of placeholder.
- Ex:- string text ${expression} string text.

String escape symbol :-

- \n -> new line 
- \t -> tab inside a string

String Method:- (in-build method)

 1. str.toUppercase() 
 2. str.toLowercase() 
 3. str.trim()
 4. str.slice(start,end)
 5. str1.concat(str2)
 6. str.replace(searchVal, newVal)
 7. str.charAt(idx)                                                                                                    

Array on JS :-

array is a collection if items.
ex - let heros = ["iron man", "hulk", "super man", "spyder man"]
array index starting form "0".
arr[0], arr[1].. etc...
looping over an array :-

loop -> iterable
syntax -> for (let i = 0; i < arr.length; i++){ statement }
practice question :- 15 min

for a given array with marks of students -> [86,78,45,32,67]. find the average marks of the entire class.
for a given array with prices of 5 items -> [567,973,390,321,689]. all items have an offer of 10% off of them. change the array to store final price after applying offer.
array methods on js :-

push - add an element to the end.
pop - delet from end
toString - convert array to string
concat - joins multiple array and return result.
unshift - add an element to the string
shift - delet from start
slice() - return a piece of the array.
splice() - change original array (add, remove, replace)


 function in js:-

 - it is a block of code that performs a specific task, can be invoked (called) whenever needed.

 Ex:---

   console.log("hello world")  --> in that code  log() is a function.
  "abc" . toUppercase() --> toUppercase() is a function
  [1,2,3].push(4); --> push() is a function

  Function Defination:-

  function functionName(){
  // do some task
  }

  --> function calling:-

  functionName()
 
--> Parameterized Function:-
 
 function functionName(parameter1 , parameter2){
  // do some task
 }
 functionName (arguement1 , arguement2)

 
Arrow Function in JS :---          

- compact way of writing a function.

syntax:- 
const functionName = (parameter1 , parameter2...) => {
  // do some task 
}
 ex. ->
 const sum = (a,b) => {
  return a + b;
 }

 Ezample  of sum :-

 function sum (a,b){
  return a + b:
 }

 const arrowSum = (a,b) => {
  return a+b;
 }