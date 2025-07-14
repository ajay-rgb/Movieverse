import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);
}

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    // Load favourites from localStorage on initial render
    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(storedFavourites);
    }, []);

    // Save favourites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourite = (movie) => {
        if (!favourites.some(fav => fav.id === movie.id)) {
            setFavourites(prev => [...prev, movie]);
        }
    };

    const removeFromFavourite = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    };

    const value = {
        favourites,
        addToFavourite,
        removeFromFavourite,
        isFavourite
    };
    
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};