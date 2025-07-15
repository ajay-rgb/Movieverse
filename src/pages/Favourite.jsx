import Navabar from '../components/Navbar.jsx';
import './Favourite.css';
import { useMovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from '../components/MovieCard.jsx';


function Favourite(){
    const {favourites} = useMovieContext();
    if(favourites.length>0){
        return(
        <div className="favourites">
            <Navabar />

            <h2>Favourite List</h2>
            <div className='movie-grid'>

                {favourites.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}

            </div>
        </div>
        );
    }
    return(
        <div>
            <Navabar/>
        <h3>No Favourites yet</h3>
        </div>
        
    );
}

export default Favourite;