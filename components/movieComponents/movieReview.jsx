import Link from "next/link";
function MovieReview() {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <h1 class="mb-8 text-3xl text-center">Sign up</h1>
      <p class="block border border-grey-light w-full p-3 rounded mb-4">
          Movie name
      </p>

      <p class="block border border-grey-light w-full p-3 rounded mb-4">
        number of seats
      </p>

      <p class="block border border-grey-light w-full p-3 rounded mb-4">
        movie time
      </p>
      <p class="block border border-grey-light w-full p-3 rounded mb-4">
        movie price
      </p>

      <Link
        href="/movieHome/payment"
        className=" sm:px-4 lg:px-8 bg-[#33a2d9] text-2xl font-bold tracking-tight text-white rounded-md border-4 border-sky-700">
           Buy your Ticket
      </Link>       
      </div>
    </div>
  </div>
  );
  }
  
  export default MovieReview;