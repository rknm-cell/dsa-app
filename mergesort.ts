const arraynums: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];

function merge(leftArray: number[], rightArray: number[]): number[] {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else if (leftArray[leftIndex] > rightArray[rightIndex]) {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      mergedArray.push(leftArray[leftIndex]);
    }
  }
  while (leftArray.length < leftIndex){
    mergedArray.push(leftArray[leftIndex])
  }
  while (rightArray.length < rightIndex){
    mergedArray.push(rightArray[rightIndex])
  }

  console.log("MergedArray: ", mergedArray);
  return mergedArray;
}
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }
  const middle = array.length / 2;
  const leftArray = array.slice(0, middle);
  console.log("left: ",leftArray)
  const rightArray = array.slice(middle);
  console.log("right: ",rightArray)
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}
console.log(arraynums);
console.log(mergeSort(arraynums));
