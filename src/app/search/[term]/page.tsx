import MovieCaroussel from '@/components/MovieCaroussel'
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'
import React from 'react'

type Props ={
    params:{
        term:string 
    }
}

export default async function SearchPage({params:{term}}:Props) {
    if(!term) notFound();
    const termToUse = decodeURI(term)
    const movies = await getSearchMovies(termToUse);
    const popularMovies = await getPopularMovies();
  return (
    <div className='max-w-7xl mx-auto'>
       <div className='flex flex-col space-y-4 mt-32 xl:-mt-42'>
        <h1 className='font-bold text-6xl px-10'>Results for {termToUse}</h1>
            <MovieCaroussel title='Movies' movies={movies} isVertical />
            <MovieCaroussel title='you may also like' movies={popularMovies} />
      </div>
    </div>
  )
}
