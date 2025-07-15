import "./MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {
    isFavourite,
    addToFavourite,
    removeFromFavourite,
  } = useMovieContext();

  const favourite = isFavourite(movie.id);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    favourite ? removeFromFavourite(movie.id) : addToFavourite(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-overlay">
        <button
          className={`favourite-btn${favourite ? "active" : ""}`}
          onClick={onFavouriteClick}
        >
          ❤
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
