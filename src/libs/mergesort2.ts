import { arraynums } from "./constants";

function Merge(left: number[], right: number[]): number[] {
  const sortedArr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (rightIndex < right.length  &&  leftIndex < left.length) {
    if (left[leftIndex]! < right[rightIndex]!) {
      sortedArr.push(left[leftIndex]!);
      leftIndex++
    } else if (left[leftIndex]! > right[rightIndex]!) {
      sortedArr.push(right[rightIndex]!);
      rightIndex++
    } else {
      sortedArr.push(left[leftIndex]!);
      leftIndex++;
    }
  }
  while (leftIndex < left.length){
    sortedArr.push(left[leftIndex]!)
    leftIndex++
  }
  while (rightIndex < right.length){
    sortedArr.push(right[rightIndex]!)
    rightIndex++
  }

  return sortedArr;
}

function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);

  const sortedArr = Merge(sortedLeft, sortedRight);

  return sortedArr;
}
console.log("array: ",arraynums)
console.log("Mergesort: ", MergeSort(arraynums))