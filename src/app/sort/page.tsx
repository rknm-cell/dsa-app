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
      {snapshots.length > 0 && (
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center text-xl text-zinc-700">
            Original Array:
            <div className="flex flex-row justify-center text-xl text-zinc-700">
              {handleRender(startingArray)}
            </div>
          </div>
          {(() => {
            const arraySteps: JSX.Element[] = [];
            const splitSteps: MergeSortSnapshot[] = [];

            snapshots.slice(0, step + 1).forEach((snapshot, index) => {
              if (snapshot.action === "split") {
                splitSteps.push(snapshot);
                arraySteps.push(
                  <div
                    key={`split-${index}`}
                    className="flex flex-row text-center"
                  >
                    {handleRender(snapshot.leftArray!)}
                    {handleRender(snapshot.rightArray!)}
                  </div>,
                );
              } else if (snapshot.action === "merge") {
                const matchingIndex = splitSteps.findIndex(
                  (split) =>
                    split.leftArray?.length === snapshot.leftArray?.length &&
                    split.rightArray?.length === snapshot.rightArray?.length,
                );
                if (matchingIndex !== -1) {
                  const splitsToRemove = splitSteps.length - matchingIndex;
                  for (let i = 0; i < splitsToRemove; i++) {
                    splitSteps.pop();
                    arraySteps.pop();
                  }
                  arraySteps.push(
                    <div
                      key={`merge-${index}`}
                      className="flex flex-row text-center text-xl text-zinc-700"
                    >
                      {handleRender(snapshot.array!)}
                    </div>,
                  );
                }
              } else {
                splitSteps.push(snapshot);
                arraySteps.push(
                  <div
                    key={`merge-${index}`}
                    className="flex flex-row text-center text-xl text-zinc-700"
                  >
                    {handleRender(snapshot.array!)}
                  </div>,
                );
              }
            });
            return arraySteps;
          })()}
        </div>
      )}
    </div>
  );
}
