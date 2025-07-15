import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favourites")) || [];
    } catch {
      return [];
    }
  });

  /* keep tabs in sync */
  useEffect(() => {
    const sync = (e) => {
      if (e.key === "favourites") {
        setFavourites(JSON.parse(e.newValue) || []);
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  /* persist */
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = useCallback(
    (movie) =>
      setFavourites((prev) =>
        prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
      ),
    []
  );

  const removeFromFavourite = useCallback(
    (id) => setFavourites((prev) => prev.filter((m) => m.id !== id)),
    []
  );

  const isFavourite = useCallback(
    (id) => favourites.some((m) => m.id === id),
    [favourites]
  );

  return (
    <MovieContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite, isFavourite }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;