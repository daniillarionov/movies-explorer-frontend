import { React, useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Prelosder from "../Preloader/Preloader";
import NotFoundResult from "../NotFoundResult/NotFoundResult";

function SavedMovies({
  onCardLike,
  isLiked,
  onSourceMovies,
  isLoading,
  loadCardList,
  addCardLoading,
  savedMovies,
  handleSouceValueChange,
  sourceValue,
  setCheckboxState,
  checkboxState,
  handleDeleteMovie,
  setSourceValue,
  handleLoadSavedMovies,
  setNotFoundText,
  notFoundText
}) {
  const [savedMoviesPage, setSavedMoviesPage] = useState(false);
  useEffect(() => {
    setCheckboxState(false);
    handleLoadSavedMovies();
    setSavedMoviesPage(true);
    setSourceValue("");
  }, []);
  const notFoundMovies = savedMovies.length === 0;
  return (
    <>
      <SearchForm
        onSourceMovies={onSourceMovies}
        onSourceValue={handleSouceValueChange}
        sourceValue={sourceValue}
        onCheckboxClick={setCheckboxState}
        checkboxState={checkboxState}
        setNotFoundText={setNotFoundText}
      />
      {isLoading ? (
        <Prelosder />
      ) : notFoundMovies ? (
        <NotFoundResult text={notFoundText} />
      ) : (
        <MoviesCardList
          onCardLike={onCardLike}
          isLiked={isLiked}
          likeButton={false}
          filterMovies={savedMovies}
          sourceValue={sourceValue}
          savedMoviesPage={savedMoviesPage}
          checkboxState={checkboxState}
          onDeleteMovie={handleDeleteMovie}
          isLoading={isLoading}
          loadCardList={loadCardList}
          setSourceValue={setSourceValue}
          addCardLoading={addCardLoading}
        />
      )}
    </>
  );
}
export default SavedMovies;
