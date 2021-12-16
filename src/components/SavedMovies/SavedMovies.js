import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  onCardLike,
  isLiked
}) {
  
  return (
    <>
    <SearchForm/>
    <MoviesCardList
    onCardLike={onCardLike}
    isLiked={isLiked}
    likeButton={false}/>    
    </>
  );
}
export default SavedMovies;