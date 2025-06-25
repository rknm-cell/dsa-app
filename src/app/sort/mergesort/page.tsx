"use client";
import { type MergeSortNode, mergeSortAnimation, mergeSortHandler } from "../../../libs/mergesort5";
import React, { useState, type JSX } from "react";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];

const mergeSortTree: MergeSortNode = {
    originalArr: structuredClone(startingArray)
    
    
}
const animationState = {
  frames: [],
  tree: mergeSortTree
}
mergeSortAnimation(startingArray, mergeSortTree, animationState);

function MergeSortNode({node}: {node: MergeSortNode}) {
    if (!node.originalArr) 
        return null;

  return (
    <div className="flex flex-col ">
        {node.originalArr && <div className="flex flex-row">
            {node.originalArr.map((n, i) => (
                <div key={i} className="m-1 flex h-8 min-w-[30px] items-center justify-center border-2 p-2 text-center font-bold text-zinc-900">
                    {n}
                </div>
            ))}</div>}
    </div>
  )
}

export default function MergeSortVisualizer() {
  const [step, setStep] = useState(0);
  const [frames, setFrames] = useState<MergeSortNode[]>([]);

  const handleSort = () => {
    const { frames, tree } = mergeSortHandler(startingArray);
    console.log("Frames: ", frames);
    console.log("Tree: ", tree);
    setFrames(frames);
    setStep(0);
  };

  const stepInstructions = {
    base: "Base case: The array is already sorted",
    split: "Split the array into two halves",
    compare: "Compare the values looking for the lower value",
    merge: "Merge the two halves",
  };
  const baseStyle = "bg-teal-400";

  return (
    <div className="min-h-screen from-purple-900 to-blue-900 p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-zinc-500">
          Merge Sort
          <MergeSortNode node={animationState.frames[step]} />
          
          
        </h1>
      </div>
    </div>
  );
}
