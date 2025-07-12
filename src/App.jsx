import './App.css';
import './components/MovieCard';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Home' element={<Home/>} ></Route>
            <Route path='/Favourite' element={<Favourite/>} ></Route>
          </Routes>
      </div>
    </>
  )
}



export default App;
