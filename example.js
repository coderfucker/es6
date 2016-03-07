'use strict';

var input = [1,2,3];
var newInput = input.map(item => item + 1);


//let
for(let i = 0; i < input.length; i++){
  console.log('for scope', i);
}

//console.log(input, newInput, i);

// const
//export const A = 1;
//export const B = 3;
//export const C = 4;

//var [a, b, c] = [1, 2, 3];
//console.log([a, b, c]);

var str = 'abcdefghijk';
for(let char of str) {
  console.log(char);
}

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

var arr1 = [].slice.call(arrayLike); // es5
let arr2 = Array.from(arrayLike); // es6
console.log(arr1, arr2);
