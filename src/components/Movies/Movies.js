import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  onCardLike,
  isLiked
}) {
  
  return (
    <>
    <SearchForm/>
    <MoviesCardList
    onCardLike={onCardLike}
    isLiked={isLiked}
    likeButton={true}/>    
    </>
  );
}
export default Movies;