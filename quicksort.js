
// Quicksort is a comparison sort, meaning that it can sort items of any type 
// for which a "less-than" relation (formally, a total order) is defined.

// Time Complexity: 
// Best case: O(n log n) 
// Average:  O(n log n) 
// Worst case: O(n2) - this behavior is rare.

// Basic Idea: 
// Pick one element in the array, which will be the pivot.
// Make one pass through the array, called a partition step, re-arranging the entries so that:
// the pivot is in its proper place.
// entries smaller than the pivot are to the left of the pivot.
// entries larger than the pivot are to its right.
// Recursively apply quicksort to the part of the array that is to the left of the pivot, 
// and to the right part of the array.
// Here we don't have the merge step, at the end all the elements are in the proper order.

// To Do: Write a function that takes an array of integers and uses quick sort to return a sorted array.


function quickSort (array){
  
}
