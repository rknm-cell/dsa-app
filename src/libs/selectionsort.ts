const arraynums: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
const arraynums2: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const arraynums3: number[] = [1, 16, 3, 12, 5, 8, 7, 42, 9, 10, 12, 25, 53];

export default function SelectionSort(array: number[]): number[] {
  const unSortedArray = array;
  const sortedArray = [];

  // grab the unsorted item
  // declare minimum value
  // check if it's lower than anything else
  // if it's lower, change minimum value to current item

  while (unSortedArray.length > 0) {
    // while unsorted Array has items
    // declare min value the first item in unsorted array
    let minIndex = 0
    let minValue = unSortedArray[0];
    for (let i = 0; i < array.length; i++) {
      //loop through array length
      // check min value that it is lower than the value of the current index in the array
      if (minValue > unSortedArray[i]) {
        // if the current value is true
        minIndex = i
        minValue = unSortedArray[i];
      }
    }
    sortedArray.push(minValue);
    unSortedArray.splice(minIndex, 1);
    console.log(minIndex)
    console.log(sortedArray);
  }
  return sortedArray;
}

SelectionSort(arraynums);
SelectionSort(arraynums2);
SelectionSort(arraynums3);
