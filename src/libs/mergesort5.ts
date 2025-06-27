import { arraynums } from "./constants";

// set up node type for merge animation
export type MergeSortNode = {
  originalArr: number[];
  left?: Partial<MergeSortNode>;
  right?: Partial<MergeSortNode>;
  // comparing?: {leftIndex: number; rightIndex: number; leftVal: number; rightVal: number;}
  sortedArr: number[];
};

function merge(
  left: number[],
  right: number[],
  mergeNode: Partial<MergeSortNode>,
  animationStates: {
    frames: Partial<MergeSortNode>[];
    tree: Partial<MergeSortNode>;
  },
): number[] {
  const mergedArr: number[] = [];
  let l = 0;
  let r = 0;
  // adds left and right arrays to the merge node
  mergeNode.left = {
    originalArr: structuredClone(left),
  };
  mergeNode.right = {
    originalArr: structuredClone(right),
  };

  while (l < left.length && r < right.length) {
    // mergeNode.comparing = { leftIndex: l, rightIndex: r, leftVal: left[l], rightVal: right[r] };
    // animationStates.frames.push(structuredClone(animationStates.tree));

    if (left[l]! <= right[r]!) {
      mergedArr.push(left[l]!);
      l++;
    } else {
      mergedArr.push(right[r]!);
      r++;
    }
  }
  delete mergeNode.left;
  delete mergeNode.right;
  return mergedArr.concat(left.slice(l)).concat(right.slice(r));
}

export function mergeSortAnimation(
  arr: number[],
  node: Partial<MergeSortNode>,
  animationStates: {
    frames: Partial<MergeSortNode>[];
    tree: Partial<MergeSortNode>;
  },
): number[] {
  // adds individual elements to the merge node
  // animationStates.frames.push(structuredClone(animationStates.tree));
  if (arr.length <= 1) {
    node.sortedArr = structuredClone(arr);
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  node.left = {
    originalArr: structuredClone(left),
  };
  animationStates.frames.push(structuredClone(animationStates.tree));

  node.right = {
    originalArr: structuredClone(right),
  };
  animationStates.frames.push(structuredClone(animationStates.tree));

  const sortedLeft = mergeSortAnimation(left, node.left, animationStates);
  const sortedRight = mergeSortAnimation(right, node.right, animationStates);

  const sortedArray = merge(sortedLeft, sortedRight, node, animationStates);

  node.sortedArr = structuredClone(sortedArray);
  animationStates.frames.push(structuredClone(animationStates.tree));

  return sortedArray;
}

const animationState = { frames: [], tree: {} };
console.log("Original array:", arraynums);
const result = mergeSortAnimation(
  arraynums,
  animationState.tree,
  animationState,
);
console.log("Sorted array:", result);
console.log("Animation state:", animationState);
export function mergeSortHandler(arr: number[]) {
  const animationState = { frames: [], tree: {} };
  mergeSortAnimation(arr, animationState.tree, animationState);
  return animationState;
}
