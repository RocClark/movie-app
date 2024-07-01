'use client'

import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'

export default function MoiveHome() {

return (
  <div className='flex flex-wrap items-center justify-center min-h-screen bg-slate-900 '>
    <div className='w-full'>
       <Header/>
    </div >
    <div className="flex justify-center h-screen  m-2 px-6  pt-24 ">
      <Link
        href="./movieHome/selectMovie"
          className="dark:bg-slate-950 jcontent-center h-24 w-48 m-4 p-3 rounded-md border-4 border-sky-700">
            Select Movie
      </Link>

      <Link
        href="./movieHome/account"
          className="dark:bg-slate-950 jcontent-center h-24 w-48 m-4 p-3 rounded-md border-4 border-sky-700">
            Acount
      </Link>
 
      <Link
        href="/"
          className="dark:bg-slate-950  h-24 w-48 m-4 p-8 rounded-md border-4 border-sky-700">
            return to home page.
      </Link>
  </div>
 
</div>
)
}
