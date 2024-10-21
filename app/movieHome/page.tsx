'use client'

import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'

export default function MovieHome() {
  return (
    <div className="flex flex-col items-center bg-slate-900 min-h-screen">
      
      {/* Fixed Header */}
      <div className="w-full fixed top-0">
        <Header />
      </div>

      {/* Centered Content */}
      <div className="flex flex-col md:flex-row items-center justify-center h-full pt-24 m-4 p-4 space-y-4 md:space-y-0 md:space-x-6">
        <Link
          href="./movieHome/selectMovie"
          className="dark:bg-slate-950 h-24 w-48 flex items-center justify-center rounded-md border-4 border-sky-700 text-center"
        >
          Select Movie
        </Link>

        <Link
          href="./movieHome/account"
          className="dark:bg-slate-950 h-24 w-48 flex items-center justify-center rounded-md border-4 border-sky-700 text-center"
        >
          Account
        </Link>

        <Link
          href="/"
          className="dark:bg-slate-950 h-24 w-48 flex items-center justify-center rounded-md border-4 border-sky-700 text-center"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}