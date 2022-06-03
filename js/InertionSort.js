// script for performing InsertionSort

function insertionSort(list) {
    let sortedList = list; // will store the sorted values

    for(let i = 0; i < list.length; i++) { // loops through the entire array
        for(let j = i; (j > 0) && (sortedList[j] < sortedList[j - 1]); j--) {   // swaps value with previous value only if the value is less than the previous value
        
         // this is where the values are swapped
          let tempVal = sortedList[j - 1];
          sortedList[j - 1] = sortedList[j];
          sortedList[j] = tempVal;
        }
    }

    return sortedList;
}

// examples:

let array1 = [3, 2, 5, 1];
console.log(insertionSort(array1));

let array2 = [5, 4, 3, 2, 1];
console.log(insertionSort(array2));

let array3 = [9, 7, 4, 2, 55, 3, 88, 10];
console.log(insertionSort(array3));