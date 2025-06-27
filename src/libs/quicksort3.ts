import { arraynums, arraynums2, arraynums3 } from "./constants";

export type QuickSortNode = {
  unsortedArr: number[];
  left?: Partial<QuickSortNode>;
  right?: Partial<QuickSortNode>;
  pivot?: Partial<QuickSortNode>;
  sortedArr: number[];
};

export function quickSortAnimation(
  arr: number[],
  node: Partial<QuickSortNode>,
  animationStates: {
    frames: Partial<QuickSortNode>[];
    tree: Partial<QuickSortNode>;
  },
): number[] {
  if (arr.length <= 1) {
    node.sortedArr = structuredClone(arr);
    return arr;
  }
  const pivot = arr.pop();

  node.pivot = {pivot: structuredClone(pivot)}
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! < pivot!) {
      left.push(arr[i]);
    } else if (arr[i]! > pivot!) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  node.left = {
    unsortedArr: structuredClone(left),
  };

  animationStates.frames.push(structuredClone(animationStates.tree));

  node.right = {
    unsortedArr: structuredClone(right),
  };

  animationStates.frames.push(structuredClone(animationStates.tree));

  const sortedLeft = quickSortAnimation(left, node.left, animationStates);
  const sortedRight = quickSortAnimation(right, node.right, animationStates);
  const sortedArr = [...sortedLeft, pivot, ...sortedRight];

  node.sortedArr = structuredClone(sortedArr);
  animationStates.frames.push(structuredClone(animationStates.tree));

  return [...sortedLeft, pivot, ...sortedRight];
}

export function quickSortHandler(arr: number[]) {
  const animationState = { frames: [], tree: {} };
  quickSortAnimation(arr, animationState.tree, animationState)
  return animationState
}
