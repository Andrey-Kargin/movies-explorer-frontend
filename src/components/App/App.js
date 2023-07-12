import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Edit from '../Edit/Edit';
import NotFoundError from '../NotFoundError/NotFoundError';

function App() {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
