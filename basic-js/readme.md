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


 