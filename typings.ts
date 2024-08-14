export type Movie = {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: 'movie' | 'tv'; // En supposant que 'media_type' peut être soit 'movie', soit 'tv'
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string; // Pourrait être affiné avec `Date` si vous le parsez comme un objet Date
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export type searchResults = {
    page:number ,
    results:Movie[]
    total_pages:number,
    total_results:number 
}
export type Genre ={
    id:number,
    name:string
}

export type Genres = {
    genres:Genre[]
}
