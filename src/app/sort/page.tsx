"use client";
import {
  type MergeSortSnapshot,
  mergeSortHandler,
} from "../components/MergeSort";
import React, { useState } from "react";

const startingArray: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
export default function Quicksort() {
  const [step, setStep] = useState(0);
  const [snapshots, setSnapshots] = useState<MergeSortSnapshot[]>([]);

  function handleSplit(array: number[]): number[][] {
    const mid = array.length / 2;
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
    return [leftArr, rightArr];
  }
  const handleSort = () => {
    const snapshotData: MergeSortSnapshot[] = mergeSortHandler(startingArray);
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
                <p>Step: {snapshots[step].step}</p>
                <div className="flex justify-center">
                  {handleRender(snapshots[step].array)}
                </div>
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
              className="px-4 py-2 = text-white bg-zinc-400
              font-bold rounded transition-colors"
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="px-4 py-2 bg-zinc-400 text-white font-bold rounded transition-colors"
            >
              {">"}
            </button> 
          </div>
           
        </div>
      </div>
    </div>
  );
}
