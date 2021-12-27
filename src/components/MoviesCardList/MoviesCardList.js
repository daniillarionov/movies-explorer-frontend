import React from "react";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  onCardLike,
  likeButton,
  filterMovies,
  savedMoviesPage,
  onDeleteMovie,
  loadCardList,
  addCardLoading,
  setSourceValue,
}) {
  const savedMoviesLocal = JSON.parse(localStorage.getItem("savedmoviesLocal"));
  const endLoading = filterMovies.length <= loadCardList;
  return (
    <div className="movies-card-list">
      <section className="movies-card-list__section">
        {filterMovies.slice(0, loadCardList).map((item) => {
          savedMoviesLocal.map((card) => {
            if (card.nameRU === item.nameRU) {
              return (item._id = card._id);
            }
          });
          return (
            <MoviesCard
              movie={item}
              duration={item.duration}
              endLoading={endLoading}
              likeButton={likeButton}
              onCardLike={onCardLike}
              onDeleteMovie={onDeleteMovie}
              link={
                savedMoviesPage
                  ? item.image
                  : `https://api.nomoreparties.co${item.image.url}`
              }
            />
          );
        })}
      </section>
      <button
        onClick={addCardLoading}
        type="button"
        className={
          endLoading
            ? "movies-card-list__button_hidden"
            : "movies-card-list__button"
        }
      >
        Ещё
      </button>
    </div>
  );
}
export default MoviesCardList;
