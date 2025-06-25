"use client";
import {
  type MergeSortSnapshot,
  mergeSortHandler,
} from "../components/MergeSort";
import React, { useState, type JSX } from "react";

const startingArray: number[] = [1, 9, 2, 12, 8, 3, 7, 4, 6, 5];
export default function MergeSort() {
  const [step, setStep] = useState(0);
  const [snapshots, setSnapshots] = useState<MergeSortSnapshot[]>([]);

  const handleSort = () => {
    const snapshotData: MergeSortSnapshot[] = mergeSortHandler(startingArray);
    console.log("snapshotData: ", snapshotData);
    setSnapshots(snapshotData);
    setStep(0);
  };

  function handleRender(array: number[]) {
    return array.map((n, index) => (
      <div
        className="m-1 flex h-8 min-w-[30px] items-center justify-center border-2 p-2 text-center font-bold text-zinc-900"
        key={index}
      >
        {n}
      </div>
    ));
  }
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
        </h1>

        <div className="rounded-lg bg-white/10 p-6 shadow-lg">
          <div className="mb-6 flex flex-row justify-center">
            {snapshots.length > 0 && snapshots[step] && (
              <div className="mb-4 text-center">
                <p className="text-lg text-zinc-700">
                  Step: {snapshots[step].action}
                </p>
                <div className="flex flex-row">
                  {snapshots[step].leftArray && (
                    <div className="flex flex-row m-4">
                      {handleRender(snapshots[step].leftArray)}
                    </div>
                  )}
                  {snapshots[step].rightArray && (
                    <div className="flex flex-row m-4">
                      {handleRender(snapshots[step].rightArray)}
                    </div>
                  )}
                </div>
                {snapshots[step].action !== "sort" ? (
                  <div className="flex justify-center">
                    {handleRender(snapshots[step].array)}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSort}
              className="rounded bg-zinc-700 px-4 py-2 text-white"
            >
              Sort
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setStep(step - 1);
              }}
              className="= rounded bg-zinc-400 px-4 py-2 font-bold text-white transition-colors"
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="rounded bg-zinc-400 px-4 py-2 font-bold text-white transition-colors"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
