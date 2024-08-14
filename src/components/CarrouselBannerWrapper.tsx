
import { getDiscoveryMovies } from "@/lib/getMovies"
import CarrouselBanner from "./CarrouselBanner"

type Props={
   
    id:string,
    keywords:string ,
}
export default async function CarrouselBannerWrapper({id , keywords}:Props) {
    const movies = await  getDiscoveryMovies(id , keywords)
     
  return (
      <CarrouselBanner movies={movies} />
  )
}
