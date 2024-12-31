'use client'

import React, {useState} from 'react';

const questionAndAnswer = [
  {question: "Question 1",
   answer: `Example Answer 1`},
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
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="flex flex-col align-middle justify-center mx-auto w-96 p-6">
      <h3 className="font-bold mb-1">Flash Cards</h3>
      <ProgressBar value={count}/>
      <FlashCard value={count} show={showAnswer} setValue={setContador} setShow={setShowAnswer} />
    </div>
  );
}

function FlashCard({ value, show, setValue, setShow }) {
  const addValue = () => {
    const newValue = value + 1;
    if(newValue < 5) {
      setValue(newValue);
    } else {
      setValue(0);
    }
  }
  const subValue = () => {
    const newValue = value - 1;
    if(newValue >= 0) {
      setValue(newValue);
    } else {
      setValue(4);
    }
  }
  const showValue = () => {
    setShow(!show)
  }
  return (
    <>
    <div className="flex flex-col border-2 rounded-lg border-gray-400 bg-white p-1">
      <div className="bg-gray-100 font-bold rounded-md text-center text-black m-1 p-14">{show ? questionAndAnswer[value].question : questionAndAnswer[value].answer}</div>
      <div className="flex flex-row justify-between bg-gray-100 rounded-md m-1 p-2">
        <span onClick={subValue} className="text-xs text-black cursor-pointer hover:underline hover:text-blue-700">&lt; Previous</span>
        <span onClick={showValue} className="text-xs text-black cursor-pointer hover:underline hover:text-blue-700">Show Answer</span>
        <span onClick={addValue} className="text-xs text-black cursor-pointer hover:underline hover:text-blue-700">Next &gt;</span>
      </div>
    </div>
    </>
  );
}

function ProgressBar({value}) {
  const progress = ((value + 1) / questionAndAnswer.length) * 100;
  const adjustWidth = progress*0.7
  return (
    <>
    <div className="flex border-2 rounded-lg border-gray-400 bg-white h-8 mb-2">
      <span className="border-2 rounded bg-gray-400" style={{ width: `${adjustWidth}%`}}></span>
      <span className="ml-2 my-auto text-xs text-black">{progress}%</span>
      <span className="ml-auto my-auto text-xs text-black px-2">{value + 1} de 5</span>
    </div>
    </>
  );
}
