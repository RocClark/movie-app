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
          <div className="flex flex-col justify-center items-center h-72 w-2/3 bg-slate-300 dark:bg-slate-900 text-center p-4">
            <h2 className="text-2xl font-bold">Welcome to the Movie Page</h2>
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
          <div className="flex flex-col justify-center items-center h-72 w-2/3 bg-slate-300 dark:bg-slate-900 text-center p-4">
            <h2 className="text-2xl font-bold">Magic 8 Ball</h2>
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
          <div className="flex flex-col justify-center items-center h-72 w-2/3 bg-slate-300 dark:bg-slate-900 text-center p-4">
            <h2 className="text-2xl font-bold">About Us</h2>
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
    <main className="flex flex-col min-h-screen relative">
      <div className="fixed top-0 w-full z-10">
        <HomeHeader onPageChange={setActivePage} />
      </div>
      <div className="mt-20 flex-grow flex justify-center items-center flex-col">
        {renderContent()}
        {/* Back button */}
        {activePage && (
          <button
            onClick={() => setActivePage(null)}
            className="mt-4 dark:bg-slate-900 bg-slate-400 p-3 rounded-lg"
          >
            Back
          </button>
        )}
      </div>
    </main>
  );
}