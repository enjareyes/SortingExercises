
// Bubble sort is one of the simplest sorting algorithms to understand and implement.

// Time Complexity: O(n2) - its efficiency decreases dramatically on lists of more than a small number of elements. 
// There exist many sorting algorithms with much better worst-case or average time complexity. 
// Even other О(n2) sorting algorithms, such as insertion sort, tend to have better performance than bubble sort. 

// Basic Idea: 
// Steps through the list to be sorted
// Compares each pair of adjacent items and swaps them if they are in the wrong order. 
// The pass through the list is repeated until no swaps are needed

// Example: 

// Let us take the array of numbers "5 1 4 2 8", and sort the array from lowest number to 
// greatest number using bubble sort. In each step, elements written in bold are being compared. 
// Three passes will be required.

// First Pass:
// ( 5 1 4 2 8 ) \to ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
// ( 1 5 4 2 8 ) \to ( 1 4 5 2 8 ), Swap since 5 > 4
// ( 1 4 5 2 8 ) \to ( 1 4 2 5 8 ), Swap since 5 > 2
// ( 1 4 2 5 8 ) \to ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

// Second Pass:
// ( 1 4 2 5 8 ) \to ( 1 4 2 5 8 )
// ( 1 4 2 5 8 ) \to ( 1 2 4 5 8 ), Swap since 4 > 2
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
// Now, the array is already sorted, but the algorithm does not know if it is completed. 
// The algorithm needs one whole pass without any swap to know it is sorted.

// Third Pass:
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )


// To Do: Write a function that takes an array of integers and uses bubble sort to return a sorted array.


function bubbleSort (array){
  
}


