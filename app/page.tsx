'use client';
import { useState } from 'react';
import HomeHeader from '../components/homeHeader';
import Link from 'next/link';

export default function Home() {
  const [activePage, setActivePage] = useState<null | string>(null);

  const renderContent = () => {
    switch (activePage) {
      case 'movieHome':
        return (
          <div className="flex flex-col justify-center items-center h-96 md:h-72 w-2/3 bg-slate-300 dark:bg-slate-900  border-4 border-slate-500 rounded-md	text-center p-4">
            <h2 className="text-2xl font-bold pb-8">Welcome to the Movie Page</h2>
              <p className='px-8 py-8 md:px-4 md:py-2 '>
                This is a simple app designed to simulate the process of buying a movie ticket from a theaters website. 
                This includes the process of picking a movie, selecting a time , picking a seat and going through a Fake payment process.
              </p>
              <Link
              href="/movieHome"
              className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
              >
                Movie Page
              </Link>
          </div>
        );
      case 'magic':
        return (
          <div className="flex flex-col justify-center items-center h-80 md:h-72 w-2/3 bg-slate-300 dark:bg-slate-900  border-4 border-slate-500 rounded-md	text-center p-4">
            <h2 className="text-2xl font-bold pb-8">Magic 8 Ball</h2>
              <p className='px-8 py-8 md:px-4 md:py-2 '>
                This is a simple app designed to act as a “magic 8-ball” where shaking the ball and turning it over is replaced with a
                button that gives you a random answer from the answers stored in the answer json object 
              </p>
              <Link
                href="/magic"
                className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
              >
                Magic 8 Ball
              </Link>
          </div>
        );
      case 'about':
        return (
          <div className="flex flex-col justify-center items-center h-96 md:h-72 w-2/3 bg-slate-300 dark:bg-slate-900  border-4 border-slate-500 rounded-md	text-center p-4">
            <h2 className="text-2xl font-bold pb-8">About Us</h2>
            <Link
              href="/about"
              className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
            >
              About
            </Link>
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-2 p-5 max-w-xs w-full dark:bg-slate-800 bg-slate-300 rounded-lg mt-20">
            <div>
              <button
                onClick={() => setActivePage('movieHome')}
                className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block w-full"
              >
                Movie Page
              </button>
            </div>
            <div>
              <button
                onClick={() => setActivePage('magic')}
                className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block w-full"
              >
                Magic 8 Ball
              </button>
            </div>
            <div>
              <button
                onClick={() => setActivePage('about')}
                className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block w-full"
              >
                About
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="flex flex-col min-h-screen relative bg-slate-900">
      <div className="fixed top-0 w-full z-10">
        <HomeHeader onPageChange={setActivePage} />
      </div>
      <div className="mt-20 flex-grow flex justify-center items-center flex-col">
        {renderContent()}
        {/* Back button */}
        {activePage && (
          <button
            onClick={() => setActivePage(null)}
            className="mt-20 md:mt-4  dark:bg-slate-600 bg-slate-400 p-3 rounded-lg"
          >
            Back
          </button>
        )}
      </div>
    </main>
  );
}