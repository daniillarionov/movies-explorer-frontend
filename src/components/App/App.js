import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  
  function handleLogin() {
    setLoggedIn(true);
  }
  function handlePopupClick() {
    setisPopupOpen(true);
  }
  function handlePopupClose() {
    setisPopupOpen(false);
  }
  function handleLikeClick() {
    setisLiked(true);
  }
  return (
    <div className="app">
      <div className="app__content">
        <Switch>
          <Route exact path="/">
          <Header loggedIn={loggedIn} onClick={handlePopupClick} />
            <Main/>
            <Footer />
          </Route>
          <Route path="/movies">
          <Header loggedIn={loggedIn} onClick={handlePopupClick} />
            <Movies onCardLike={handleLikeClick} isLiked={isLiked} />
            <Footer />
          </Route>
          <Route path="/saved-movies">
          <Header loggedIn={loggedIn} onClick={handlePopupClick} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
          <Header loggedIn={loggedIn} onClick={handlePopupClick} />
            <Profile />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
        </Switch>
        <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
      </div>
    </div>
  );
}
export default App;
