"use client";

import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import type { QuickSortNode } from "~/libs/quicksort3";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];

const mergeSortTree: Partial<QuickSortNodeSortNode> = {
  originalArr: structuredClone(startingArray),
};
const animationState = {
  frames: [],
  tree: mergeSortTree,
};
mergeSortAnimation(startingArray, mergeSortTree, animationState);

function MergeSortNode({
  node,
  nodePath = "",
}: {
  node: Partial<MergeSortNode>;
  nodePath?: string;
}) {
  if (!node.originalArr) return null;

  return (
    <div className="flex flex-col">
      {node.originalArr && (
        <div className="flex flex-row">
          {node.originalArr.map((n, i) => (
            <motion.div
              layoutId={`${nodePath}-number-${n}`}
              id={`original-${n}`}
              key={i}
              className="m-1 flex h-8 min-w-[30px] items-center border-2 p-2 text-center font-bold text-zinc-900"
            >
              {n}
            </motion.div>
          ))}
        </div>
      )}
      <motion.div
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-row"
      >
        <motion.div
          className="mr-2 flex flex-row gap-2"
          key={node.left?.originalArr?.join(",")}
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(-10px)" }}
          transition={{ type: "spring", layout: { duration: 0.1 }, delay: 0.1 }}
        >
          {node.left && (
            <MergeSortNode node={node.left} nodePath={`${nodePath}-left`} />
          )}
        </motion.div>
        <motion.div
          className="mr-2 flex flex-row gap-2"
          key={node.right?.originalArr?.join(",")}
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(10px)" }}
          transition={{ type: "spring", layout: { duration: 0.1 }, delay: 0.1 }}
        >
          {node.right && (
            <MergeSortNode node={node.right} nodePath={`${nodePath}-right`} />
          )}
        </motion.div>
      </motion.div>
      {node.sortedArr && (
        <motion.div className="flex flex-row">
          {node.sortedArr.map((n, i) => (
            <motion.div
              layoutId={`${nodePath}-number-${n}`}
              key={i}
              className="m-1 flex h-8 min-w-[30px] items-center border-2 p-2 text-center font-bold text-zinc-900"
              initial={{ transform: "translateY(0px)" }}
              animate={{ transform: "translateY(0px)" }}
              transition={{ type: "spring", layout: { duration: 0.2, delay: i * 0.1 }, delay: i * 0.5}}
            >
              {n}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function QuickSortVisualizer() {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (step < animationState.frames.length - 1) {
  //       setStep(step + 1);
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);

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
