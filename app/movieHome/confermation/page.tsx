import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import ReviewTicket from '../../../components/movieComponents/reviewTicket' // Import the reviewTicket component

export default function Confermation() {
  return (
    <div className='bg-slate-900'>
      <MovieHeader/>
      
      
      <ReviewTicket/>
    </div>
    
  )
}
