import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import SignUpForm from '../../../components/movieComponents/signUpForm'; // Import the SignUpForm component

export default function SignUp() {
  return (
    <div className='bg-slate-900'>
      <MovieHeader/>
     
      <div className="flex justify-center h-4/6  m-2 px-6  pt-24 rounded-md border-4 border-sky-700">
        <SignUpForm/> {/* Use the imported SignUpForm component */}
      </div>
    </div>
  )
}
