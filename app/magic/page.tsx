'use client'; 
import React from 'react';
import Link from 'next/link';
import Answer from '../../components/magicComponents/answers';
import { useEffect, useState } from 'react'



export default function MagicBall() {

  const [answers, setAnswers] = useState([]); // To store the BallResponse array
  const [randomAnswer, setRandomAnswer] = useState(''); // To store the random selected answer

  useEffect(() => {
    // Fetch the responses from the API
    fetch("/api/ball")
      .then((response) => response.json())
      .then((data) => setAnswers(data));
  }, []);

  const getResponse = () => {
    // Select a random answer from the array
    const randomIndex = Math.floor(Math.random() * answers.length);
    setRandomAnswer(answers[randomIndex]);
  };

  return (
    <div>
      <h1>Magic 8 Ball</h1>
      
      {/* Button to trigger getResponse function */}
      <button onClick={getResponse}>Ask the Magic 8 Ball</button>

      {/* Display the random answer */}
      <Answer answer={randomAnswer} />

      
    </div>
);
};


