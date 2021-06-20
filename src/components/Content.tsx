import { MovieCard } from './MovieCard';

import { Header } from './Header';

import '../styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header title={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies?.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}