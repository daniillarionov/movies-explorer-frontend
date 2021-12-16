function MoviesCard({ name, duration, link, onCardLike, isLiked, likeButton}) {
    
    return (
      <article className="movies-card">
        <img
          className="movies-card__image"
          alt="Изображение"
          src={link}
        />
        <div className="movies-card__description">
        <div className="movies-card__section">   
          <h2 className="movies-card__title">{name}</h2>
          { likeButton ? (
          <button
          onClick={onCardLike}
            type="button"
            aria-label="Нравится"
            className={`movies-card__like ${
              isLiked ? "movies-card__like_active" : "movies-card__like"
            }`}
          />) : (
            <button
            type="button"
            aria-label="Удалить"
            className="movies-card__delete"
          />
          )}
         </div>
          <p className="movies-card__duration">{duration}</p>
                  
          
        </div>
      </article>
    );
  }
  export default MoviesCard;