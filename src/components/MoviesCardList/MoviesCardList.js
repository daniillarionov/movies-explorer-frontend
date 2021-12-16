import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  onCardLike,
  isLiked,
  likeButton
}) {
  return (
    <div className="movies-card-list">
      <section className="movies-card-list__section">
            <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://wallbox.ru/wallpapers/main/201550/c3aad58856f1369.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
            <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://yobte.ru/uploads/posts/2019-11/devushki-v-jarkih-platjah-78-foto-6.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
            <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://yobte.ru/uploads/posts/2019-11/devushki-v-sinih-platjah-82-foto-15.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
            <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />
             <MoviesCard
            name="33 слова о дизайне"
            duration="1ч42м"
            link="https://mykaleidoscope.ru/uploads/posts/2021-03/1615611326_25-p-plate-na-chernom-fone-obraz-27.jpg"
            onCardLike={onCardLike}
            isLiked={isLiked}
            likeButton={likeButton}
            />           
      </section>
      <button type="button" className="movies-card-list__button">Ещё</button>
    </div>
  );
}
export default MoviesCardList;