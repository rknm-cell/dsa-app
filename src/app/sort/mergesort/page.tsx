"use client";
import {
  type MergeSortNode,
  mergeSortAnimation,
  mergeSortHandler,
} from "../../../libs/mergesort5";
import { motion } from "motion/react";
import React, { useState } from "react";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];

const mergeSortTree: Partial<MergeSortNode> = {
  originalArr: structuredClone(startingArray),
};
const animationState = {
  frames: [],
  tree: mergeSortTree,
};
mergeSortAnimation(startingArray, mergeSortTree, animationState);

function MergeSortNode({ node }: { node: Partial<MergeSortNode> }) {
  if (!node.originalArr) return null;

  return (
    <div className="flex flex-col justify-center">
      {node.originalArr && (
        <div className="flex flex-row">
          {node.originalArr.map((n, i) => (
            <div
              key={i}
              className="m-1 flex h-8 min-w-[30px] items-center justify-center border-2 p-2 text-center font-bold text-zinc-900"
            >
              {n}
            </div>
          ))}
        </div>
      )}
      <motion.div className="flex flex-row">
        <motion.div
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(-10px)" }}
          transition={{ type: "spring" }}
          className="mr-2 flex flex-row gap-2"
        >
          {node.left && <MergeSortNode node={node.left} />}
        </motion.div>
        <motion.div className="ml-2 flex flex-row gap-2">
          {node.right && <MergeSortNode node={node.right} />}
        </motion.div>
      </motion.div>
      {node.sortedArr && (
        <div className="flex flex-row">
          {node.sortedArr.map((n, i) => (
            <div className="gap-2 border-2" key={i}>
              {n}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MergeSortVisualizer() {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const stepInstructions = {
    base: "Base case: The array is already sorted",
    split: "Split the array into two halves",
    compare: "Compare the values looking for the lower value",
    merge: "Merge the two halves",
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-zinc-500">
          Merge Sort
        </h1>
        <div className="mt-4 flex justify-center gap-4 text-zinc-700">
          <button onClick={handlePrev} disabled={step === 0}>
            {" "}
            {"<"}{" "}
          </button>
          <span>
            {step + 1} / {animationState.frames.length}
          </span>
          <button
            onClick={handleNext}
            disabled={step === animationState.frames.length - 1}
          >
            {" "}
            {">"}{" "}
          </button>
        </div>

        <div className="flex flex-col gap-2 text-2xl text-zinc-700">
          {animationState.frames[step] && (
            <MergeSortNode node={animationState.frames[step]} />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
