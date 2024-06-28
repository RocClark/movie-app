import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import LogInForm from '../../../components/movieComponents/logInForm'; // Import the SignUpForm component

export default function LogIn() {
  return (
    <div>
      <MovieHeader/>
      <h1> LogIn Page</h1>
      <div className="flex justify-center h-4/6  m-2 px-6  pt-24">
        <LogInForm/> {/* Use the imported SignUpForm component */}
      </div>
    </div>
    
  )
}
