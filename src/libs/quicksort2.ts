const arrayToBeSorted = [13, 32, 98, 24, 53, 86, 24, 34, 78, 24];

function quickSort(array: number[]): number[] {
  const arr = array;
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop();
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! < pivot!) {
      leftArr.push(arr[i]!);
    } else if (arr[i]! > pivot!) {
      rightArr.push(arr[i]!);
    } else {
      leftArr.push(arr[i]);
    }
  }
  const sortedLeft = quickSort(leftArr);
  const sortedRight = quickSort(rightArr);
  return [...sortedLeft, pivot, ...sortedRight];
}
console.log(arrayToBeSorted);
console.log(quickSort(arrayToBeSorted));
