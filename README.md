


# 🚀 DSA Problem 1: First Pair with Sum Zero

## 🔹 Problem
Given a sorted array of integers, find the **first pair** whose **sum is 0**.

## 🔹 Example
**Input:** `[-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]`  
**Output:** `[-4, 4]`

## 🔹 Solution (Brute Force)
Check every possible pair using nested loops.

## 🔹 Code
```js
let num = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8];

function getPairSumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

let result = getPairSumZero(num);
console.log(result); // Output: [-4, 4]