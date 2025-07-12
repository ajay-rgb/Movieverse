import { useState } from 'react';
import MovieCard from '../components/MovieCard.jsx';
import './Home.css';
import Navabar from '../components/Navbar.jsx'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const movies = [
        {
            id: 1,
            title: "John Wick", 
            release_date: "2020",
            url: "url"
        },
        {
            id: 2,
            title: "Texas Chainsaw Massacre", 
            release_date: "1990",
            url: "url2"  
        },
        {
            id: 3,
            title: "Blade Runner", 
            release_date: "1995",
            url: "url3"  
        }
    ];

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

            <div className='movies-grid'>
                {
              
                movies.map(movie => <MovieCard movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    );
}

export default Home;