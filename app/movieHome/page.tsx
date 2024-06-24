'use client'

import Image from 'next/image'
import Header from '../../components/movieComponents/movieHeader' 
import Link from 'next/link'

export default function MoiveHome() {

  return (
  <div className='flex flex-wrap items-center justify-center min-h-screen bg-slate-900 '>
    <div className='w-full'>
       <Header/>
    </div>
   
    <Link
  href="./movieHome/selectMovie"
  className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
>
 Select Movie.
</Link>
  
<Link
  href="/"
  className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
>
 return to home page.
</Link>
</div>
  )
}
