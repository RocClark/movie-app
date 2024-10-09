import React from "react";
import Image from "next/image";

function MovieScreen() {
  return (
    <div className="relative h-96 w-full bg-[#343c40] flex justify-center py-7">
      <Image
        src="/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg" // Adjusted path
        layout="fill"
        alt="Theater Image"
        className="object-cover" // Ensures the image covers the entire div
        quality={100} // Optional: Adjust image quality as needed
      />
    </div>
  );
}

export default MovieScreen;