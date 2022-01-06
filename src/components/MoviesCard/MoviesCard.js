import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  link,
  onCardLike,
  likeButton,
  movie,
  duration,
  onDeleteMovie,
  savedMovies,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = savedMovies.some((item) => {
    return item._id === movie._id;
  });
  const isOwn = movie.owner === currentUser._id;
  function convertDuration(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return hours + "ч" + minutes + "м";
  }
  const durationMovie = convertDuration(duration);
  const movieDeleteButtonClassName = `${
    isOwn ? "movies-card__delete" : "movies-card__delete_hidden"
  }`;
  function handleLikeClick() {
    onCardLike({
      country: movie.country || "отсутствует",
      director: movie.director || "отсутствует",
      duration: movie.duration || 0,
      year: movie.year || "отсутствует",
      description: movie.description || "отсутствует",
      image: link,
      trailer: movie.trailerLink || "https://www.nofound.ru",
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || "отсутствует",
      nameEN: movie.nameEN || "отсутствует",
    });
  }
  function handleDeleteClick() {
    onDeleteMovie(movie._id);
  }
  return (
    <article className="movies-card">
      <a href={movie.trailerLink || movie.trailer} target="_blank">
        <img className="movies-card__image" alt="Изображение" src={link} />
      </a>
      <div className="movies-card__description">
        <div className="movies-card__section">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {likeButton ? (
            <button
              onClick={isLiked ? handleDeleteClick : handleLikeClick}
              type="button"
              aria-label="Нравится"
              className={`movies-card__like ${
                isLiked ? "movies-card__like_active" : "movies-card__like"
              }`}
            />
          ) : (
            <button
              onClick={handleDeleteClick}
              type="button"
              aria-label="Удалить"
              className={movieDeleteButtonClassName}
            />
          )}
        </div>
        <p className="movies-card__duration">{durationMovie}</p>
      </div>
    </article>
  );
}
export default MoviesCard;
