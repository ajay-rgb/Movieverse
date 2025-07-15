import './App.css';
import './components/MovieCard';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import { Route, Routes } from 'react-router-dom';
import MovieContext from './contexts/MovieContext';

function App() {


  return (
    <MovieContext>

      <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Home' element={<Home/>} ></Route>
            <Route path='/Favourite' element={<Favourite/>} ></Route>
          </Routes>
      </div>


    </MovieContext>

    
  )
}



export default App;
