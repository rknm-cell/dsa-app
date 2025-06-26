"use client";
import { type MergeSortNode, mergeSortAnimation, mergeSortHandler } from "../../../libs/mergesort5";
import React, { useState } from "react";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];

const mergeSortTree: Partial<MergeSortNode> = {
    originalArr: structuredClone(startingArray)
    
    
}
const animationState = {
  frames: [],
  tree: mergeSortTree
}
mergeSortAnimation(startingArray, mergeSortTree, animationState);

function MergeSortNode({node}: {node: Partial<MergeSortNode>}) {
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
            <div className="flex flex-row">

            <div className="flex flex-row gap-2 mr-2">
            {node.left && <MergeSortNode node={node.left}/>}
            </div>
            <div className="flex flex-row gap-2 ml-2">
            {node.right && <MergeSortNode node={node.right}/>}
            </div>
            </div>
            {node.sortedArr && <div className="flex flex-row">
              {node.sortedArr.map((n, i) => (<div key={i}>{n}</div>))}</div>}
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
  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const stepInstructions = {
    base: "Base case: The array is already sorted",
    split: "Split the array into two halves",
    compare: "Compare the values looking for the lower value",
    merge: "Merge the two halves",
  };

  return (
    <div className="min-h-screen from-purple-900 to-blue-900 p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-zinc-500">
          Merge Sort
          <MergeSortNode node={animationState.frames[step]} />
          
          <button onClick={handlePrev}> {'<'} </button>
          <button onClick={handleNext}> {'>'} </button>
          
        </h1>
      </div>
    </div>
  );
}
