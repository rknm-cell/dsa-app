import { arraynums } from "./constants";

function Merge(left: number[], right: number[]): number[] {
  const mergedArr: number[] = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      mergedArr.push(left[l]);
      l++;
    } else if (left[l] > right[r]) {
      mergedArr.push(right[r]);
      r++;
    } else {
      mergedArr.push(left[l]);
      l++;
    }
  }
  while (l < left.length) {
    mergedArr.push(left[l]);
    l++;
  }
  while (r < right.length) {
    mergedArr.push(right[r]);
    r++;
  }

  return mergedArr;
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

  return Merge(sortedLeft, sortedRight);
}
console.log(arraynums);
console.log(MergeSort(arraynums));
