"use client";

import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import  {type QuickSortNode, quickSortAnimation } from "~/libs/quicksort3";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];

const quickSortTree: Partial<QuickSortNodeSortNode> = {
  unsortedArr: structuredClone(startingArray),
};
const animationState = {
  frames: [],
  tree: quickSortTree,
};
quickSortAnimation(startingArray, quickSortTree, animationState);

function QuickSortNode({
  node,
  nodePath = "",
  showSorted = false,
}: {
  node: Partial<QuickSortNode>;
  nodePath?: string;
  showSorted?: boolean;
}) {
  if (!node.unsortedArr && !node.sortedArr) return null;

  return (
    <div className="flex flex-col">
      {!showSorted && node.unsortedArr && (
        <motion.div className="flex flex-row">
          {node.unsortedArr.map((n, i) => (
            <motion.div
              layoutId={`${nodePath}-number-${n}`}
              id={`unsorted-${n}`}
              key={i}
              className="m-1 flex h-8 min-w-[30px] items-center border-2 p-2 text-center font-bold text-zinc-900"
            >
              {n}
            </motion.div>
          ))}
        </motion.div>
      )}
      <motion.div
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-row"
      >
        <motion.div
          className="mr-2 flex flex-row gap-2"
          key={node.left?.unsortedArr?.join(",")}
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(-10px)" }}
          transition={{ type: "spring", layout: { duration: 0.1 }, delay: 0.1 }}
        >
          {node.left && (
            <QuickSortNode node={node.left} nodePath={`${nodePath}-left`} />
          )}
        </motion.div>
        <motion.div
          className="mr-2 flex flex-row gap-2"
          key={node.pivot?.pivot}
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(0px)" }}
          transition={{ type: "spring", layout: { duration: 0.1 }, delay: 0.1 }}
        >
          {node.pivot?.pivot && (
            <motion.div
              layoutId={`${nodePath}-pivot-${node.pivot.pivot}`}
              className="m-1 flex h-8 min-w-[30px] items-center border-2 p-2 text-center font-bold bg-zinc-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              {node.pivot.pivot}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="mr-2 flex flex-row gap-2"
          key={node.right?.unsortedArr?.join(",")}
          initial={{ transform: "translateY(-40px)" }}
          animate={{ transform: "translateY(0px) translateX(10px)" }}
          transition={{ type: "spring", layout: { duration: 0.1 }, delay: 0.1 }}
        >
          {node.right && (
            <QuickSortNode node={node.right} nodePath={`${nodePath}-right`} />
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.3, delay: i * 0.1 }}
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
  const [showSorted, setShowSorted] = useState(false); 


  // const handleNext = () => setStep(step + 1);
  // const handlePrev = () => setStep(step - 1);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (step < animationState.frames.length - 1) {
  //       setStep(step + 1);
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);
  const handleNext = () => {
    if (step < animationState.frames.length - 1) {
      setStep(step + 1);
    } else {
      setShowSorted(true); // Show merged arrays
    }
  };
  const handlePrev = () => {
    if (showSorted) {
      setShowSorted(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };
  

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-zinc-500">
          Quick Sort
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
            <QuickSortNode node={animationState.frames[step]} 
            showSorted={showSorted}  />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
