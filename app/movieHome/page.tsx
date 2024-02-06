"use client";
import Image from "next/image";
import Header from "../../components/movieComponents/movieHeader";
import Link from "next/link";
import MovieList from "../../components/movieComponents/movieList";
import { useEffect, useState } from "react";

export default function MoiveHome() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-slate-900 ">
      <div className="">
        {movies.length > 0 ? <MovieList movies={movies} /> : "Loading..."}
      </div>

      <Link
        href="/"
        className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
      >
        return to home page
      </Link>
    </div>
  );
}
