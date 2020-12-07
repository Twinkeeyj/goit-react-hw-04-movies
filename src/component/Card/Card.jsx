import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  poster_path,
  release_date,
  title,
  overview,
  id,
  genres,
  popularity,
}) => {
  let img =
    'https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg';

  poster_path === null
    ? (poster_path = img)
    : (poster_path = `https://image.tmdb.org/t/p/w300${poster_path}`);

  return (
    <div key={id} Class="container-cards">
      <img src={poster_path} alt="" Class="cards-poster" />
      <div Class="cards-info">
        <h1 Class="cards-info-text">
          {title}({(release_date = new Date(release_date).getFullYear())})
        </h1>
        <h3 Class="cards-info-text">Popularity: {popularity}% </h3>
        <h2 Class="cards-info-text">Overview</h2>
        <p Class="cards-info-text card-overview-text">
          {overview ? overview : 'Опис ще друкують=)'}
        </p>
        <h2 Class="cards-info-text">Genres</h2>
        <ul Class="card-genres">
          {genres.map(el => (
            <li key={el.id} Class="card-genres-list">
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
};
