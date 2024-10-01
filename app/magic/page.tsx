'use client';

import React, { useState, useEffect } from 'react';
import Answer from '../../components/magicComponents/answers';

export default function MagicBall() {
  const [answers, setAnswers] = useState([]); // Store API responses
  const [randomAnswer, setRandomAnswer] = useState(''); // Store random selected answer
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
        className={`flex items-center justify-center h-80 w-80 bg-blue-500 text-white rounded-full text-center text-xl ${isShaking ? 'animate-shake' : ''}`}
      >
        <Answer answer={randomAnswer} />
      </div>
    </div>
  );
}