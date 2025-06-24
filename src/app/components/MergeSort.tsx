export interface MergeSortSnapshot {
  step: number;
  array: number[];
  leftArray?: number[];
  rightArray?: number[];
  mergedArray?: number[];
  action: "merge" | "split" | "base";
}
const snapshots: MergeSortSnapshot[] = [];
function addSnapshot(snapshot: MergeSortSnapshot) {
  snapshots.push(snapshot);
}

const arraynums: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
let steps = 0;
function merge(leftArray: number[], rightArray: number[]): number[] {
  const mergedArray: number[] = [];
  steps++;
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex]! < rightArray[rightIndex]!) {
      mergedArray.push(leftArray[leftIndex]!);
      leftIndex++;
    } else if (leftArray[leftIndex]! > rightArray[rightIndex]!) {
      mergedArray.push(rightArray[rightIndex]!);
      rightIndex++;
    } else {
      mergedArray.push(leftArray[leftIndex]!);
      leftIndex++;
      rightIndex++;
    }
  }
  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]!);
    leftIndex++;
  }
  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]!);
    rightIndex++;
  }

  addSnapshot({
    step: steps,
    array: mergedArray,
    leftArray: leftArray,
    rightArray: rightArray,
    action: "merge",
  });

  return mergedArray;
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    addSnapshot({
      step: steps,
      array: array,
      action: "base",
    });
    return array;
  }
  steps++;
  const middle = array.length / 2;
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  addSnapshot({
    step: steps,
    array: array,
    leftArray: leftArray,
    rightArray: rightArray,
    action: "split",
  });

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  const mergedArray = merge(sortedLeft, sortedRight);

  return mergedArray;
}
export function mergeSortHandler(array: number[]): MergeSortSnapshot[] {
  snapshots.length = 0;
  steps = 0;
  mergeSort(array);
  return snapshots;
}

// console.log(arraynums);
// console.log(mergeSort(arraynums));
// console.log(snapshots);
