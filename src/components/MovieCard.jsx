import './MovieCard.css';

function MovieCard({movie}){

    function onFavouriteClick(){
        alert("added to favourite");
    }



    return(
        <div className="movie-card">

            <div className="movie-image">
                <img src="{movie.url}" alt="poster" />
            </div>
        
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>❤</button>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    );
}

export default MovieCard;