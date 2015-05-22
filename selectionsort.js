
// Selection sort is an in-place comparison sort. 
// Time Complexity: О(n2)

// Basic Idea: 
// 1. Select the lowest element requires scanning all n elements (this takes n − 1 comparisons) 
// 2. Swap it into the first position. 
// 3. Find the next lowest element by scanning the remaining n − 1 elements and so on..

// Example: 
// 64 25 12 22 11 // this is the initial, starting state of the array
// 11 25 12 22 64 // sorted sublist = {11}
// 11 12 25 22 64 // sorted sublist = {11, 12}
// 11 12 22 25 64 // sorted sublist = {11, 12, 22}
// 11 12 22 25 64 // sorted sublist = {11, 12, 22, 25}
// 11 12 22 25 64 // sorted sublist = {11, 12, 22, 25, 64} 
// Nothing appears changed on the last two lines because the last two numbers were already in order

// To Do: Write a function that takes an array of integers and uses selection sort to return a sorted array.


function selectionSort (array){
  
}

