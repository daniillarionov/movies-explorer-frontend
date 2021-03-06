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
import ProtectedRouteForSignin from "../ProtectedRouteForSignin/ProtectedRouteForSignin";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isPopupErrorOpen, setisPopupErrorOpen] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [savedMovies, setSavedMovie] = useState([]);
  const [loadSavedMovies, setLoadSavedMovie] = useState([]);
  const [error, setError] = useState([]);
  const [errorLogin, setErrorLogin] = useState("");
  const [notFoundText, setNotFoundText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false);
  const [isRenderHeader, setIsRenderHeader] = useState(false);
  const [isRenderFooter, setIsRenderFooter] = useState(false);
  const [sourceValue, setSourceValue] = useState("");
  const [savedSourceValue, setSavedSourceValue] = useState("");
  const [checkboxState, setCheckboxState] = useState(false);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [savedMoviesPage, setSavedMoviesPage] = useState(false);
  const history = useHistory();
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  let loadCardListStart =
    width < 766 ? 5 : width < 1181 ? 8 : width < 1279 ? 9 : 12;
  const addCardLoad = width < 766 ? 1 : width < 1181 ? 2 : width < 1279 ? 3 : 4;
  const [loadCardList, setLoadCardList] = useState(loadCardListStart);
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      apiAuth
        .validToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            localStorage.setItem("loggedIn", true);
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          setisPopupErrorOpen(true);
          setError(err);
        });
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWidth, { passive: true });
    return () => {
      window.removeEventListener("rezize", handleWidth);
    };
  }, []);
  function loadUserInfo() {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      });
  }
  function handleFilterMovies(
    movies,
    checkboxState,
    sourceValue,
    setMoviesList
  ) {
    localStorage.setItem("checkboxState", checkboxState);
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
    localStorage.setItem("sourceMoviesResult", JSON.stringify(Movies));
    setMoviesList(Movies);
  }
  function handleFilterSavedMovies(
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
      .getUserInfo()
      .then((res) => {
        api
          .getMovies()
          .then((data) => {
            const savedMovies = data.filter((item) => {
              if (item.owner === res._id) {
                return item;
              }
            });
            setSavedMovie(savedMovies);
            localStorage.setItem(
              "savedMoviesLocal",
              JSON.stringify(savedMovies)
            );
          })
          .catch((err) => {
            setisPopupErrorOpen(true);
            setError(err);
          });
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
  function handleLoadMovies() {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("moviesLocal", JSON.stringify(data));
        localStorage.setItem("sourceValue", sourceValue);
        localStorage.setItem("checkboxState", checkboxState);
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
        setNotFoundText(
          "???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????"
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
        const newSavedMovies = [
          ...JSON.parse(localStorage.getItem("savedMoviesLocal")),
          data,
        ];
        setSavedMovie(newSavedMovies);
        localStorage.setItem(
          "savedMoviesLocal",
          JSON.stringify(newSavedMovies)
        );
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
    setIsRenderHeader(false);
  }
  function handleRegister({ name, email, password }) {
    apiAuth
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        history.push("/movies");
      })
      .catch(() => {
        setErrorLogin("?????? ?????????????????????? ?????????????????? ????????????");
      });
  }
  function handleLogin({ email, password }) {
    apiAuth
      .login({ email, password })
      .then((data) => {
        setLoggedIn(true);
        history.push("/movies");
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("loggedIn", true);
        loadUserInfo();
        handleLoadMovies();
        handleLoadSavedMovies();
      })
      .catch(() => {
        setErrorLogin("?????? ?????????????????????? ?????????????????? ????????????");
      });
  }

  function handleButtonQuitClick() {
    history.push("/");
    localStorage.removeItem("jwt");
    localStorage.removeItem("sourceValue");
    localStorage.removeItem("checkboxState");
    localStorage.removeItem("moviesLocal");
    localStorage.removeItem("sourceMoviesResult");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("savedMoviesLocal");
    localStorage.removeItem("source");
    setSourceValue("");
    setLoggedIn(false);
  }
  function handleSouceValueChange(data) {
    setSourceValue(data);
  }
  function handleSouceSavedValueChange(data) {
    setSavedSourceValue(data);
  }

  console.log(savedMovies);
  function handleDeleteMovie(movieId) {
    setIsOpenDeletePopup(true);
    api
      .deleteMovie(movieId)
      .then((data) => {
        const SavedMovies = JSON.parse(
          localStorage.getItem("savedMoviesLocal")
        );
        const result = SavedMovies.findIndex((item) => {
          if (item._id === data._id) {
            return item;
          }
        });
        SavedMovies.splice(result, 1);
        setSavedMovie(SavedMovies);
        localStorage.setItem("savedMoviesLocal", JSON.stringify(SavedMovies));
      })
      .catch((err) => {
        setisPopupErrorOpen(true);
        setError(err);
      })
      .finally(() => {
        setIsOpenDeletePopup(false);
      });
  }
  function HandleClockToBack() {
    history.goBack();
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
              <Main
                setIsRenderHeader={setIsRenderHeader}
                setIsRenderFooter={setIsRenderFooter}
              />
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              onCardLike={handleLikeClick}
              onSourceMovies={handleLoadMovies}
              filterMovies={filterMovies}
              isLoading={isLoading}
              loadCardList={loadCardList}
              addCardLoading={addCardLoading}
              setIsRenderHeader={setIsRenderHeader}
              setIsRenderFooter={setIsRenderFooter}
              handleSouceValueChange={handleSouceValueChange}
              sourceValue={sourceValue}
              setCheckboxState={setCheckboxState}
              checkboxState={checkboxState}
              notFoundText={notFoundText}
              setSourceValue={setSourceValue}
              handleDeleteMovie={handleDeleteMovie}
              handleFilterMovies={handleFilterMovies}
              setNotFoundText={setNotFoundText}
              setFilterMovies={setFilterMovies}
              savedMovies={savedMovies}
              setSavedMovie={setSavedMovie}
              handleLoadSavedMovies={handleLoadSavedMovies}
              setSavedMoviesPage={setSavedMoviesPage}
              savedMoviesPage={savedMoviesPage}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              isLoading={isLoading}
              loadCardList={loadCardList}
              addCardLoading={addCardLoading}
              savedMovies={savedMovies}
              handleSouceValueChange={handleSouceSavedValueChange}
              sourceValue={savedSourceValue}
              setCheckboxState={setCheckboxState}
              checkboxState={checkboxState}
              handleDeleteMovie={handleDeleteMovie}
              onSourceMovies={handleSourceSavedMovies}
              handleLoadSavedMovies={handleLoadSavedMovies}
              setNotFoundText={setNotFoundText}
              notFoundText={notFoundText}
              setSavedMovie={setSavedMovie}
              handleFilterMovies={handleFilterSavedMovies}
              setSavedMoviesPage={setSavedMoviesPage}
              savedMoviesPage={savedMoviesPage}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              handleButtonQuitClick={handleButtonQuitClick}
              handleUpdateUser={handleUpdateUser}
              setIsRenderFooter={setIsRenderFooter}
            />

            <ProtectedRouteForSignin
              path="/signin"
              component={Login}
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

            <ProtectedRouteForSignin
              path="/signup"
              component={Register}
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
            <Route path="*">
              <PageNotFound
                onClose={HandleClockToBack}
                setIsRenderHeader={setIsRenderHeader}
                setIsRenderFooter={setIsRenderFooter}
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
