import { React, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Prelosder from "../Preloader/Preloader";
import NotFoundResult from "../NotFoundResult/NotFoundResult";

function Movies({
  onCardLike,
  onSourceMovies,
  filterMovies,
  isLoading,
  loadCardList,
  addCardLoading,
  setIsRenderHeader,
  setIsRenderFooter,
  handleSouceValueChange,
  sourceValue,
  setCheckboxState,
  notFoundText,
  setSourceValue,
  handleDeleteMovie,
  handleFilterMovies,
  checkboxState,
  setNotFoundText,
  setFilterMovies,
  savedMovies,
  setSavedMovie,
  setSavedMoviesPage,
  savedMoviesPage,
}) {
  const localCheckBoxState = JSON.parse(localStorage.getItem("checkboxState"));
  const localSourceValue = localStorage.getItem("sourceValue");
  const localMovies = JSON.parse(localStorage.getItem("moviesLocal"));
  useEffect(() => {
    const localSavedMovies = JSON.parse(
      localStorage.getItem("savedMoviesLocal")
    );
    setSavedMovie(localSavedMovies)
    setSavedMoviesPage(false);
    setIsRenderHeader(false);
    setIsRenderFooter(false);
    setCheckboxState(localCheckBoxState);
    setSourceValue(localSourceValue);
    const localSourceMoviesResult = JSON.parse(
      localStorage.getItem("sourceMoviesResult")
    );
    localMovies === null
      ? onSourceMovies()
      : setFilterMovies(localSourceMoviesResult);
  }, []);
  useEffect(() => {
    const localSource = localStorage.getItem("source");
    if (localSource) {
      handleFilterMovies(
        localMovies,
        checkboxState,
        localSourceValue,
        setFilterMovies
      );
    }
  }, [checkboxState]);
  const notFoundMovies = filterMovies === null || filterMovies.length === 0;
  return (
    <>
      <SearchForm
        onSourceValue={handleSouceValueChange}
        onCheckboxClick={setCheckboxState}
        sourceValue={sourceValue}
        checkboxState={checkboxState}
        filterMovies={filterMovies}
        setNotFoundText={setNotFoundText}
        handleFilterMovies={handleFilterMovies}
        movies={localMovies}
        setFilterMovies={setFilterMovies}
        savedMoviesPage={savedMoviesPage}
      />
      {isLoading ? (
        <Prelosder />
      ) : notFoundMovies ? (
        <NotFoundResult text={notFoundText} />
      ) : (
        <MoviesCardList
          onCardLike={onCardLike}
          filterMovies={filterMovies}
          likeButton={true}
          loadCardList={loadCardList}
          addCardLoading={addCardLoading}
          onDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
        />
      )}
    </>
  );
}
export default Movies;
