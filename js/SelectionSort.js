// script for performing SelectionSort

function selectionSort(list) {
    let sortedList = list;

    for(let i = 0; i < list.length - 1; i++) {
        let largeIndex = 0;
        for(let j = 0; j < list.length - 1; j++) {
            if(list[j] > list[largeIndex]) {
                largeIndex = j;
            }
        }
        let tempVal = list.length-i-1;
        list[list.length-i-1] = list[largeIndex];
        list[largeIndex] = tempVal;
    }

    return list;
}

let array1 = [2, 3, 1, 5];
console.log(selectionSort(array1));