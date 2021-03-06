import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=401d61f37c17d956a98039a1a0734109&language=en-US&page=1`,
    );

    this.setState({ reviews: response.data.results });
  }
  render() {
    return (
      <ul Class="reviews-container">
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(e => (
            <li key={e.id}>
              <h2 Class="cards-info-text">Author: {e.author}</h2>
              <p Class="cards-info-text reviews-text">{e.content}</p>
            </li>
          ))
        ) : (
          <p>Обзор ще не добавили</p>
        )}
      </ul>
    );
  }
}
export default Reviews;

Reviews.propTypes = {
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
