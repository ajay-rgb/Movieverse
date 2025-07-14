import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard.jsx';
import './Home.css';
import Navabar from '../components/Navbar.jsx';
import {searchMovies, getPopularMovies} from '../services/api.js';
import './Home.css';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    useEffect(()=>{
        const loadPopularMovies = async() =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){
                console.log(err);
                setError("failed");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    

    function formSubmitHandler(e) {
        e.preventDefault();
        alert(`You searched for: ${searchTerm}`);
        setSearchTerm('');
    }

    function handleInputChange(e) {
        setSearchTerm(e.target.value);
    }

    return(
        <div className="home">

            <Navabar />


            <form onSubmit={formSubmitHandler} className='search-form'>
                <input 
                    type="text" 
                    placeholder="explore movie..." 
                    className='search-input'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type='submit' className='search-button'>
                    Go
                </button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {loading ? <div className='loading'>Loading...</div> :
             (<div className='movies-grid'>
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
            )}

  
        </div>
    );
}

export default Home;