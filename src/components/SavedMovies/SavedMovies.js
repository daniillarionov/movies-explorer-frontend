import { React, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Prelosder from "../Preloader/Preloader";
import NotFoundResult from "../NotFoundResult/NotFoundResult";

function SavedMovies({
  onCardLike,
  isLoading,
  loadCardList,
  addCardLoading,
  savedMovies,
  handleSouceValueChange,
  sourceValue,
  setCheckboxState,
  checkboxState,
  handleDeleteMovie,
  setNotFoundText,
  notFoundText,
  setSavedMovie,
  handleFilterMovies,
  setSavedMoviesPage,
  savedMoviesPage,
}) {
  useEffect(() => {
    const localSavedMovies = JSON.parse(
      localStorage.getItem("savedMoviesLocal")
    );
    setSavedMoviesPage(true);
    setCheckboxState(false);
    setSavedMovie(localSavedMovies)
  }, []);
  useEffect(() => {
    const localSavedMovies = JSON.parse(
      localStorage.getItem("savedMoviesLocal")
    );
    handleFilterMovies(
      localSavedMovies,
      checkboxState,
      sourceValue,
      setSavedMovie
    );
  }, [checkboxState]);
  const notFoundMovies = savedMovies.length === 0;
  return (
    <>
      <SearchForm
        onSourceValue={handleSouceValueChange}
        sourceValue={sourceValue}
        onCheckboxClick={setCheckboxState}
        checkboxState={checkboxState}
        setNotFoundText={setNotFoundText}
        handleFilterMovies={handleFilterMovies}
        movies={savedMovies}
        setFilterMovies={setSavedMovie}
        filterMovies={savedMovies}
        savedMoviesPage={savedMoviesPage}
      />
      {isLoading ? (
        <Prelosder />
      ) : notFoundMovies ? (
        <NotFoundResult text={notFoundText} />
      ) : (
        <MoviesCardList
          onCardLike={onCardLike}
          likeButton={false}
          filterMovies={savedMovies}
          savedMoviesPage={savedMoviesPage}
          onDeleteMovie={handleDeleteMovie}
          loadCardList={loadCardList}
          addCardLoading={addCardLoading}
          savedMovies={savedMovies}
        />
      )}
    </>
  );
}
export default SavedMovies;
