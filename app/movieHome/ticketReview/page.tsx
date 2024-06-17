import Image from 'next/image'
import MovieReview from '../../../components/movieComponents/movieReview'
import MovieForm from '../../../components/movieComponents/movieForm'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import Link from 'next/link'

export default function about() {

  return (
    <div>
    <MovieHeader/>
    <div className="flex flex-col min-h-screen items-center justify-center">
      <MovieReview/>
      <MovieForm/>
        <Link
          href="/movieHome/endPage"
            className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white">
              end Page
        </Link>
      </div>
  </div>
  )
}
