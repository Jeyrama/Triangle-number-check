/*
A triangle number is a number where n objects form an equilateral triangle (it's a bit hard to explain). 
For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:
  1
 2 3
4 5 6

8 is not a triangle number because 8 objects do not form an equilateral triangle:
   1
  2 3
 4 5 6
7 8

In other words, the nth triangle number is equal to the sum of the n natural numbers from 1 to n.

Your task:
  Check if a given input is a valid triangle number. Return true if it is, false if it is not 
  (note that any non-integers, including non-number types, are not triangle numbers).

Assumptions:
  You may assume that the given input, if it is a number, is always positive.

Notes:
  0 and 1 are triangle numbers.
*/


// Solution

function isTriangleNumber(number) {
  let sum = 0;
  let step = 0;
  while (sum < number) {
    step++;
    sum += step;
  }
  return sum === number;
}

// or

function isTriangleNumber(number) {
  return Math.sqrt(1+8*number)%1==0;
}

// or

const isTriangleNumber = n =>
  Number.isInteger((8 * n + 1) ** .5);