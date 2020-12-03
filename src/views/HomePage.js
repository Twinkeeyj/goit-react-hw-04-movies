import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';


export default class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=401d61f37c17d956a98039a1a0734109',
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <ul>
          {this.state.movies.map(m => (
            <li key={m.id}>
              <Link to={`${this.props.match.url}movies/${m.id}`}>
                {m.title || m.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
