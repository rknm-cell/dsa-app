"use client";
import React, { useState } from "react";

export default function Quicksort() {
  const [step, setStep] = useState(0);
  const sortArray: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
  function handleSort(array: number[]): number[] {
    return array;
  }

  function handleRender(array: number[]) {
    return array.map((n, index) => <div className="p-1 border-1" key={index}>{n}, </div>);
  }
  return (
    <div className="flex max-w-dvh flex-col justify-center align-middle">
      <h1 className="text-xl font-bold">Merge Sort</h1>
      <div>
        <div className="flex flex-row">

        {handleRender(sortArray)}
        </div>
        
        <div>
          <button
            onClick={() => {
              setStep(step - 1);
            }}
            className="w-20 border"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            className="w-20 border"
          >
            {">"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
