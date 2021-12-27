import { Switch, Route, useHistory } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import apiAuth from "../../utils/ApiAuth";
import api from "../../utils/MainApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import PopupSideMenu from "../PopupSideMenu/PopupSideMenu";
import PopupMovieDelete from "../PopupMovieDelete/PopupMovieDelete";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isPopupErrorOpen, setisPopupErrorOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMovies, setSavedMovie] = useState([]);
  const [loadSavedMovies, setLoadSavedMovie] = useState([]);
  const [error, setError] = useState([]);
  const [errorSource, setErrorSource] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [notFoundText, setNotFoundText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false);
  const [isRenderHeader, setIsRenderHeader] = useState(false);
  const [isRenderFooter, setIsRenderFooter] = useState(false);
  const [sourceValue, setSourceValue] = useState("");
  const [checkboxState, setCheckboxState] = useState(false);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const history = useHistory();
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  let loadCardListStart =
    width < 766 ? 5 : width < 1181 ? 8 : width < 1279 ? 9 : 12;
  const addCardLoad = width < 766 ? 1 : width < 1181 ? 2 : width < 1279 ? 3 : 4;
  const [loadCardList, setLoadCardList] = useState(loadCardListStart);

  useEffect(() => {
    window.addEventListener("resize", handleWidth, { passive: true });
    return () => {
      window.removeEventListener("rezize", handleWidth);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("sourceValue", "");
    handleLoadSavedMovies();
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      apiAuth
        .validToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          setisPopupErrorOpen(true);
          setError(err);
        });
    }
  }, []);
  function handleFilterMovies(
    movies,
    checkboxState,
    sourceValue,
    setMoviesList
  ) {
    const Movies = movies.filter((item) => {
      if (
        checkboxState
          ? item.nameRU.toLowerCase().includes(sourceValue.toLowerCase()) &&
            item.duration <= 40
          : item.nameRU.toLowerCase().includes(sourceValue.toLowerCase())
      ) {
        return item;
      }
    });
    localStorage.setItem("moviesLocalSource", JSON.stringify(Movies));
    setMoviesList(Movies);
  }
  function addCardLoading() {
    let newLoadCardList = loadCardList + addCardLoad;
    setLoadCardList(newLoadCardList);
  }
  function handleWidth() {
    setWidth(document.documentElement.clientWidth);
  }
  function handleLoadSavedMovies() {
    setIsLoading(true);
    api
      .getMovies()
      .then((data) => {
        const savedMovies = data.filter((item) => {
          if (item.owner === currentUser._id) {
            return item;
          }
        });
        localStorage.setItem("savedmoviesLocal", JSON.stringify(savedMovies));
        localStorage.setItem("savedSurceValue", sourceValue);
        localStorage.setItem("savedCeckboxState", checkboxState);
        setSavedMovie(savedMovies);
        setLoadSavedMovie(savedMovies);
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleSourceSavedMovies() {
    handleFilterMovies(
      loadSavedMovies,
      checkboxState,
      sourceValue,
      setSavedMovie
    );
  }
  function handleSourceMovies() {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("moviesLocal", JSON.stringify(data));
        localStorage.setItem("sourceValue", sourceValue);
        localStorage.setItem("checkboxState", checkboxState);
        setMovies(data);
        handleFilterMovies(data, checkboxState, sourceValue, setFilterMovies);
      })
      .catch((err) => {
        setErrorSource(true);
        setNotFoundText(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser({ name, email }) {
    api
      .updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsOpenTooltip(true);
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      });
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrorLogin("");
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setErrorLogin("");
  }
  function handlePopupClick() {
    setisPopupOpen(true);
  }
  function handlePopupClose() {
    setisPopupOpen(false);
    setisPopupErrorOpen(false);
    setIsOpenTooltip(false);
  }
  function handleLikeClick(data) {
    api
      .addMovie(data)
      .then((data) => {
        savedMovies.push(data);
        handleFilterMovies(movies, checkboxState, sourceValue, setSavedMovie);
        localStorage.setItem("savedmoviesLocal", JSON.stringify(savedMovies));
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      });
  }
  function handleMoviesClick() {
    history.push("/movies");
  }
  function handleSavedMoviesClick() {
    history.push("/saved-movies");
  }
  function handleAccountClick() {
    history.push("/profile");
  }
  function handleSignupClick() {
    history.push("/signup");
  }
  function handleSigninClick() {
    history.push("/signin");
  }
  function handleLogoClick() {
    history.push("/");
  }
  function handleRegister({ name, email, password }) {
    apiAuth
      .register({ name, email, password })
      .then((data) => {
        history.push("/movies").catch((err) => {
          setisPopupErrorOpen(true);
          setError(err);
        });
      })
      .catch((err) => {
        setErrorLogin("При регистрации произошла ошибка");
      });
  }
  function handleLogin({ email, password }) {
    apiAuth
      .login({ email, password })
      .then((data) => {
        setLoggedIn(true);
        history.push("/movies");
        localStorage.setItem("jwt", data.token);
      })
      .catch((err) => {
        setErrorLogin("При авторизации произошла ошибка");
      });
  }
  function handleButtonQuitClick() {
    history.push("/signin");
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }
  function handleSouceValueChange(data) {
    setSourceValue(data);
  }
  function handleDeleteMovie(movieId) {
    setIsOpenDeletePopup(true);
    api
      .deleteMovie(movieId)
      .then((data) => {
        api
          .getMovies()
          .then((data) => {
            const savedMovies = data.filter((item) => {
              if (item.owner === currentUser._id) {
                return item;
              }
            });
            localStorage.setItem(
              "savedmoviesLocal",
              JSON.stringify(savedMovies)
            );
            handleFilterMovies(
              savedMovies,
              checkboxState,
              sourceValue,
              setSavedMovie
            );
          })
          .catch((err) => {
            setisPopupErrorOpen(true);
            setError(err);
          })
          .finally(() => {
            setIsOpenDeletePopup(false);
          });
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      })
      .finally(() => {});
  }
  return (
    <div className="app">
      <div className="app__content">
        <CurrentUserContext.Provider value={currentUser}>
          {!isRenderHeader ? (
            <Header
              loggedIn={loggedIn}
              onClick={handlePopupClick}
              handleMoviesClick={handleMoviesClick}
              handleSavedMoviesClick={handleSavedMoviesClick}
              handleAccountClick={handleAccountClick}
              handleSignupClick={handleSignupClick}
              handleSigninClick={handleSigninClick}
              handleLogoClick={handleLogoClick}
            />
          ) : (
            ""
          )}
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              onCardLike={handleLikeClick}
              onSourceMovies={handleSourceMovies}
              filterMovies={filterMovies}
              isLoading={isLoading}
              loadCardList={loadCardList}
              addCardLoading={addCardLoading}
              setIsRenderHeader={setIsRenderHeader}
              setIsRenderFooter={setIsRenderFooter}
              setMovies={setMovies}
              handleSouceValueChange={handleSouceValueChange}
              sourceValue={sourceValue}
              setCheckboxState={setCheckboxState}
              checkboxState={checkboxState}
              errorSource={errorSource}
              notFoundText={notFoundText}
              setSourceValue={setSourceValue}
              handleDeleteMovie={handleDeleteMovie}
              handleFilterMovies={handleFilterMovies}
              setNotFoundText={setNotFoundText}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              loadCardList={loadCardList}
              addCardLoading={addCardLoading}
              savedMovies={savedMovies}
              handleSouceValueChange={handleSouceValueChange}
              sourceValue={sourceValue}
              setCheckboxState={setCheckboxState}
              checkboxState={checkboxState}
              handleDeleteMovie={handleDeleteMovie}
              setSourceValue={setSourceValue}
              onSourceMovies={handleSourceSavedMovies}
              handleLoadSavedMovies={handleLoadSavedMovies}              
              setNotFoundText={setNotFoundText}              
              notFoundText={notFoundText}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              handleButtonQuitClick={handleButtonQuitClick}
              handleUpdateUser={handleUpdateUser}
              setIsRenderFooter={setIsRenderFooter}
            />

            <Route path="/signin">
              <Login
                onLogin={handleLogin}
                onEmailChange={handleEmailChange}
                onPasswordChange={handlePasswordChange}
                email={email}
                password={password}
                handleLogoClick={handleLogoClick}
                setIsRenderHeader={setIsRenderHeader}
                setIsRenderFooter={setIsRenderFooter}
                errorLogin={errorLogin}
              />
            </Route>

            <Route path="/signup">
              <Register
                onRegister={handleRegister}
                onEmailChange={handleEmailChange}
                onPasswordChange={handlePasswordChange}
                email={email}
                password={password}
                handleLogoClick={handleLogoClick}
                setIsRenderHeader={setIsRenderHeader}
                setIsRenderFooter={setIsRenderFooter}
                errorLogin={errorLogin}
                setErrorLogin={setErrorLogin}
              />
            </Route>
          </Switch>
          {!isRenderFooter ? <Footer /> : ""}
          <PopupSideMenu isOpen={isPopupOpen} onClose={handlePopupClose} />
          <Error
            error={error}
            onClose={handlePopupClose}
            isOpen={isPopupErrorOpen}
          />
          <InfoTooltip isOpen={isOpenTooltip} onClose={handlePopupClose} />
          <PopupMovieDelete isOpen={isOpenDeletePopup} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
export default App;
