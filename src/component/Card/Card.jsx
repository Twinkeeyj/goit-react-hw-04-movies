import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ poster_path, release_date, title, overview, id, genres }) => {
  let img =
    'https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg';

    poster_path === null
      ? (poster_path = img)
      : (poster_path = `https://image.tmdb.org/t/p/w300${poster_path}`);
  

  return (
    <div key={id}>
      <img src={poster_path} alt="" />
      <h1>
        {title}({(release_date = new Date(release_date).getFullYear())})
      </h1>
      <h2>Overview</h2>
      <p>{!overview && 'Опис ще друкують=)'}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(el => (
          <li key={el.id}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>

      <p>Additional infomation</p>
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
