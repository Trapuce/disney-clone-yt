"use client";
import React, { useEffect } from 'react'
import { Movie } from '../../typings'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'
export default function CarrouselBanner({ movies }: { movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])
    return (
        <div 
          className="overflow-hidden lg:-mt-40 relative cursor-pointer" 
          ref={emblaRef}
        >
          <div className="flex">
            {movies.map((movie) => (
              <div key={movie.id} className="flex-full min-w-0 relative">
                <Image 
                  src={getImagePath(movie.backdrop_path, true)} 
                  alt={movie.title} 
                  layout="responsive" 
                  width={1920} 
                  height={1080} 
                />
                <div 
                  className="hidden lg:inline absolute top-0 left-0 mt-0 lg:mt-40 pt-40 xl:pt-52 w-full h-full z-20 p-10 text-white bg-gradient-to-r from-gray-900/90 via-transparent to-transparent space-y-5"
                >
                  <h2 className="text-5xl font-bold max-w-xl z-50">
                    {movie.title}
                  </h2>
                  <p className="max-w-xl line-clamp-3">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
        </div>
      );
      
}
