import MovieCaroussel from "@/components/MovieCaroussel";
import { getDiscoveryMovies } from "@/lib/getMovies";

type Props={
    params:{
        id:string;
    },
    searchParams:{
        genre:string ;
    }
};
export default async function GenrePage({params:{id}, searchParams:{genre}}:Props) {
    const movies = await getDiscoveryMovies(id);
  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure OPENAI service */}
      <div className='flex flex-col space-y-4 mt-32 xl:-mt-42'>
      <h1 className='font-bold text-6xl px-10'>Results for {genre}</h1>
            <MovieCaroussel title={`Genre`} movies={movies} isVertical />
        
         </div>
    </div>
  )
}
