import { arraynums } from "./constants";

export type MergeSortNode = {
    
  originalArr: number[];
  left?: Partial<MergeSortNode>;
  right?: Partial<MergeSortNode>;
  sortedArr: number[];
};

function merge(left: number[], right: number[]): number[] {
  const mergedArr: number[] = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l]! <= right[r]!) {
      mergedArr.push(left[l]!);
      l++;
    } else {
      mergedArr.push(right[r]!);
      r++;
    }
  }
  return mergedArr.concat(left.slice(l)).concat(right.slice(r));
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}
console.log(arraynums);
console.log(mergeSort(arraynums));
