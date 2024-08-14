import React from 'react'
import {Genres , Genre} from  "../../typings"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import {ChevronDown} from "lucide-react"


async   function GenreDropDown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';
    const options:RequestInit={
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`   
     },
    next:{
        revalidate:60*60*24
    }
}
const response = await fetch(url , options);
const data = (await response.json())  as Genres
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="text-white flex justify-center items-center">
      Genre <ChevronDown  className='ml-1'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {data.genres.map((genre) => (
        <DropdownMenuItem key={genre.id}>
          <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
            {genre.name}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
export default GenreDropDown;
