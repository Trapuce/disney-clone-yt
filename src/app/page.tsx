import { Button } from "@/components/ui/button";
import Image from "next/image";
import MovieCaroussel from "@/components/MovieCaroussel";
import {getUpcomingMovies , getTopratedMovies , getPopularMovies } from "../lib/getMovies";
import CarrouselBannerWrapper from "@/components/CarrouselBannerWrapper";

async function Home() {
  const upcomingMovies = await getUpcomingMovies();
const topRatedMovies = await  getTopratedMovies();
const popularMovies = await getPopularMovies();
  return (
  <main>
    <CarrouselBannerWrapper />
       <div className="flex flex-col space-y-2  xl:-mt-48">
          <MovieCaroussel movies={upcomingMovies} title="Upcoming"  />
          <MovieCaroussel movies={topRatedMovies} title="Top Rated" />
          <MovieCaroussel movies={popularMovies} title="Popular" />

        </div>      
  </main>
  );
}

export default Home ;
