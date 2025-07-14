import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard.jsx';
import './Home.css';
import Navabar from '../components/Navbar.jsx';
import { searchMovies, getPopularMovies } from '../services/api.js';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load popular movies");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        if (loading) return;
        
        try {
            setLoading(true);
            const searchResults = await searchMovies(searchTerm);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies");
        } finally {
            setLoading(false);
        }

        setSearchTerm('');
    };

    return (
        <div className="home">
            <div className='nav-container'>
                <Navabar />
            </div>

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

            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className='movies-grid'>
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;