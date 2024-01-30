import Image from 'next/image'
import MovieReview from '../../../components/movieComponents/movieReview'
import MovieForm from '../../../components/movieComponents/movieForm'

export default function about() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <MovieReview/>
     
      <MovieForm/>
    
  </div>
  )
}
