"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Answer from "../../components/magicComponents/answers";

export default function MagicBall() {
  const [answers, setAnswers] = useState([]); // Store API responses
  const [randomAnswer, setRandomAnswer] = useState(""); // Store random selected answer
  const [isShaking, setIsShaking] = useState(false); // To trigger shake animation

  useEffect(() => {
    fetch("/api/ball")
      .then((response) => response.json())
      .then((data) => setAnswers(data));
  }, []);

  const getResponse = () => {
    // Select a random answer
    const randomIndex = Math.floor(Math.random() * answers.length);
    setRandomAnswer(answers[randomIndex]);

    // Trigger shake animation
    setIsShaking(true);

    // Stop shaking after animation (500ms)
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Magic 8 Ball</h1>

      <button
        onClick={getResponse}
        className="mb-4 px-4 py-2 bg-blue-700 text-white rounded"
      >
        Ask the Magic 8 Ball
      </button>

      <div
        className={`flex items-center justify-center bg-black text-black rounded-full text-center text-xl 
        h-60 w-60 sm:h-56 sm:w-56 lg:h-96 lg:w-96 ${
          isShaking ? "animate-shake" : ""
        }`}
      >
        <div className="relative w-0 h-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-gray-500 rotate-180 translate-y-[60px]">
          <div className="absolute top-[80px] left-[-55px] w-[110px] text-white text-center text-sm rotate-180">
            <Answer answer={randomAnswer} />
          </div>
        </div>
      </div>
      <Link
        href="/"
        className=" text-lg h-8 w-48 m-4 p-8 rounded-md  text-center"
      >
        Home page
      </Link>
    </div>
  );
}
