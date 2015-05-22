
//More efficient in practice than most other simple quadratic algorithms like selection sort or bubble sort

// Time Complexity: 
// Best case:  O(n) Input is an array that is already sorted. 
// During each iteration, the first remaining element of the input is only compared 
// with the right-most element of the sorted subsection of the array.

// Worst case: O(n2) Input is an array sorted in reverse. The set of all worst case inputs consists 
// of all arrays where each element is the smallest or second-smallest of the elements before it. In these 
// cases every iteration of the inner loop will scan and shift the entire sorted subsection of the array before 
// inserting the next element. This gives it a quadratic running time.

// Average case:  O(n2) Also quadratic, making insertion sort impractical for sorting large arrays. 
// However, insertion sort is one of the fastest algorithms for sorting small arrays.

// Example: 

// The following table shows the steps for sorting the sequence [3, 7, 4, 9, 5, 2, 6, 1]

// 3 7 4 9 5 2 6 1    Key in consideration: 3  
// 3 7 4 9 5 2 6 1    Key in consideration: 7  Key moved or left: 3
// 3 7 4 9 5 2 6 1    Key in consideration: 4  Key moved or left: 7
// 3 4 7 9 5 2 6 1    Key in consideration: 9  Key moved or left: 4
// 3 4 7 9 5 2 6 1    Key in consideration: 5  Key moved or left: 9
// 3 4 5 7 9 2 6 1    Key in consideration: 2  Key moved or left: 5
// 2 3 4 5 7 9 6 1    Key in consideration: 6  Key moved or left: 2
// 2 3 4 5 6 7 9 1    Key in consideration: 1  Key moved or left: 6
// 1 2 3 4 5 6 7 9                             Key moved or left: 1


// To Do: Write a function that takes an array of integers and uses insertion sort to return a sorted array.


function insertionSort (array){

}
