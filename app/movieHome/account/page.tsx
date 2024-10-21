import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import Link from 'next/link';

export default function Account() {
  return (
    

    <div className='bg-slate-900'>
      <MovieHeader/>
      <div className="flex flex-col min-h-screen items-center justify-center dark:bg-sky-700 ">
        
        <h1> Account page in progress</h1>


        <Link
          href="/movieHome"
            className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white">
              return home
        </Link>
      </div>
    </div>
    
  )
}
