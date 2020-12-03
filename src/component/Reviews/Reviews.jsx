import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
//import { Test } from './Cast.styles';
// import "@babel/polyfill"

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=401d61f37c17d956a98039a1a0734109&language=en-US&page=1`,
    );
    console.log(response.data.results);
    this.setState({ reviews: response.data.results });
  }
  render() {

    return (
      <ul>


        {this.state.reviews.length>0 ? (
          this.state.reviews.map(e => (
            <li key={e.id}>
              <h2>Author: {e.author}</h2>
              <p>{e.content}</p>
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

Reviews.propTypes={
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author:PropTypes.string.isRequired,
      content:PropTypes.string.isRequired,
    
    })
  )
}