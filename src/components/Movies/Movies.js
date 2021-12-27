import { React, useState, useEffect } from "react";
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
  setMovies,
  handleSouceValueChange,
  sourceValue,
  setCheckboxState,
  notFoundText,
  setSourceValue,
  handleDeleteMovie,
  handleFilterMovies,
  checkboxState,
  setNotFoundText
}) {
  useEffect(() => {
    const localCheckBoxState = localStorage.getItem("checkboxState");
    const localSourceValue = localStorage.getItem("sourceValue");
    setCheckboxState(localCheckBoxState);
    setSourceValue(localSourceValue);
    setIsRenderHeader(false);
    setIsRenderFooter(false);
    handleFilterMovies(
      filterMovies,
      localCheckBoxState,
      localSourceValue,
      setMovies
    );
  }, []);
  const notFoundMovies = filterMovies.length === 0;
  return (
    <>
      <SearchForm
        onSourceMovies={onSourceMovies}
        onSourceValue={handleSouceValueChange}
        onCheckboxClick={setCheckboxState}
        sourceValue={sourceValue}
        checkboxState={checkboxState}
        filterMovies={filterMovies}
        setNotFoundText={setNotFoundText}
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
          setSourceValue={setSourceValue}
          onDeleteMovie={handleDeleteMovie}
        />
      )}
    </>
  );
}
export default Movies;
