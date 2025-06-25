const arrayToBeSorted = [13, 32, 98, 53, 86, 34, 78, 24];

export default function QuickSort(array: number[]): number[] {
    console.log("array: ", array)
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftSide = [];
  const rightSide = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]! < pivot!) {
      leftSide.push(array[i]!);
    } else if (array[i] > pivot!) {
      rightSide.push(array[i]);
    }
  }
  console.log("Sorted Left: ", leftSide, "Pivot: ", pivot, "Sorted Right: ", leftSide)
  const sortedLeft = QuickSort(leftSide);
  const sortedRight = QuickSort(rightSide);
  const combinedArray = [...sortedLeft, pivot,...sortedRight];
  console.log("combinedArray: ", combinedArray)
  return [...sortedLeft, pivot,...sortedRight];
}

QuickSort(arrayToBeSorted);
