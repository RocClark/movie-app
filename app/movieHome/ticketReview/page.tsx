import Image from 'next/image'
import MovieReview from '../../../components/movieComponents/movieReview'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import Link from 'next/link'

export default function TicketReview() {

  return (
    <div>
    <MovieHeader/>
    <div className="flex flex-col min-h-screen items-center justify-center">
      <MovieReview/>
      
        <Link
          href="/movieHome/payment"
            className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white">
              payment
        </Link>
      </div>
  </div>
  )
}
