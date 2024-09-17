import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Answer from '../../components/magicComponents/answers';


export default function resume() {
  return (
    <div>
    <h1>Magic 8 Ball</h1>
    <button >Ask the Magic 8 Ball</button>
    <Answer/>
      </div>
);
};


