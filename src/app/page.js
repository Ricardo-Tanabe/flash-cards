'use client'

import React, {useState} from 'react';

const questionAndAnswer = [
  {question: "What is the difference between var, let, and const?",
   answer: `In JavaScript, var is function-scoped and can be re-declared; let
            and const are block-scoped, with let allowing re-assignment and
            const preventing it. Howeverm const objects can have their contents
            modified.`},
  {question: "Question 2",
   answer: "Example Answer 2"},
  {question: "Question 3",
   answer: "Example Answer 3"},
  {question: "Question 4",
   answer: "Example Answer 4"},
   {question: "Question 5",
    answer: "Example Answer 5"},
]

export default function Page() {
  const [count, setContador] = useState(0)

  return (
    <div className="flex flex-col align-middle justify-center mx-auto w-96 p-6">
      <h3 className="font-bold mb-1">Flash Cards</h3>
      <ProgressBar />
      <FlashCard value={count} countFunction={setContador}/>
    </div>
  );
}

function FlashCard({ value, countFunction }) {
  // function addValue() {
  //   countFunction(value + 1);
  //   if(value > 4) {
  //     countFunction(0);
  //   }
  //   console.log(value)
  // }

  // function subValue() {
  //   countFunction(value - 1);
  //   if(value < 0) {
  //     countFunction(4);
  //   }
  //   console.log(value)
  // }

  return (
    <>
    <div className="flex flex-col border-2 rounded-lg border-gray-400 p-1">
      <div className="bg-gray-100 font-bold rounded-md text-center m-1 p-14">What is the difference between var, let, and const?</div>
      <div className="flex flex-row justify-between bg-gray-100 rounded-md m-1 p-2">
        <span className="text-xs cursor-pointer hover:underline hover:text-blue-700">&lt; Previous</span>
        <span className="text-xs cursor-pointer hover:underline hover:text-blue-700">Show Answer</span>
        <span className="text-xs cursor-pointer hover:underline hover:text-blue-700">Next &gt;</span>
      </div>
    </div>
    </>
  );
}

function ProgressBar() {
  return (
    <>
    <div className="flex border-2 rounded-lg border-gray-400 h-8 mb-2">
      <span className="border-2 rounded bg-gray-400 w-48"></span>
      <span className="ml-2 my-auto text-xs">25%</span>
      <span className="ml-auto my-auto text-xs px-2">1 de 5</span>
    </div>
    </>
  );
}
