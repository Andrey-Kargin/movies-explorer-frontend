import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NotFoundError from '../NotFoundError/NotFoundError';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useState, useEffect } from 'react';

import { useNavigate, useLocation, Navigate } from "react-router-dom";

import CurrentUserContext from '../../context/CurrentUserContext';

import * as api from '../../utils/MainApi';

function App() {

  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ responseError, setResponseError ] = useState(null);
  const [ responseSuccess, setResponseSuccess ] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem('allMovies');
            setIsLoggedIn(true);
          }
          navigate(location.pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .getCards()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  //регистрация пользователя
  function handleRegister({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        handleAuthorize({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //авторизация пользователя
  function handleAuthorize({ email, password }) {
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleCardLike(card) {
    api
      .postCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleUnauthorized(err) {
    if (err === 'Error: 401') {
      handleSignOut();
    }
  }

  function handleUpdateUser(newUserInfo) {
    api
      .setUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        setResponseSuccess('Данные успешно изменены')
      })
      .catch((err) => {
        handleUnauthorized(err);
        setResponseError('При обновлении профиля произошла ошибка.');
      })
  }

  // Выход
  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  };


  return (<CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<ProtectedRoute loggedIn={isLoggedIn} element={Movies} onCardDelete={handleCardDelete} handleLikeClick={handleCardLike} savedMovies={savedMovies} />} />
        <Route path='/saved-movies' element={<ProtectedRoute loggedIn={isLoggedIn} element={SavedMovies} onCardDelete={handleCardDelete} handleLikeClick={handleCardLike} savedMovies={savedMovies} />} />
        <Route path='/profile' element={<ProtectedRoute loggedIn={isLoggedIn} element={Profile} responseSuccess={responseSuccess} responseError={responseError} handleUpdateUser={handleUpdateUser} handleSignOut={handleSignOut} />} />
        <Route path="/signup" element={!isLoggedIn ? <Register onRegister={handleRegister} /> : <Navigate to="/movies" />}/>
        <Route path="/signin" element={ !isLoggedIn ? <Login onLogin={handleAuthorize} /> : <Navigate to="/movies" />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
