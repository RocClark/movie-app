import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import MovieForm from '../../../components/movieComponents/movieForm' // Import the MovieForm component
import Link from 'next/link'; // Import the Link component
export default function Payment() {
  return (
    

    <div className='bg-slate-900'>
      <MovieHeader/>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <MovieForm/>


      </div>
      
     
    </div>
    
  )
}
