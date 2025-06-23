"use client";
import React, { useState } from "react";

export default function Quicksort() {
  const [step, setStep] = useState(1);
  const startingArray: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
  
  function handleSplit(array: number[]): number[][] {
    const mid = array.length / 2;
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
    return [leftArr, rightArr];
  }

  function handleRender(array: number[]) {
    return array.map((n, index) => (
      <div 
        className="border-2   text-zinc-900 p-2 m-1 text-center font-bold min-w-[30px] h-8 flex items-center justify-center" 
        key={index}
      >
        {n}
      </div>
    ));
  }

  return (
    <div className="min-h-screen  from-purple-900 to-blue-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-zinc-500">
          Merge Sort
        </h1>
        
        <div className="bg-white/10 rounded-lg p-6 shadow-lg">
          <div className="flex flex-row justify-center mb-6">
            {handleRender(startingArray)}
          </div>
          
          {step === 2 ? <div className="text-center mb-4">{handleSplit(startingArray)}</div> : <></>}
          
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
