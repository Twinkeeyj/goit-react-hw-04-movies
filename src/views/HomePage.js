import React, { Component } from 'react';

import Axios from 'axios';
import { NavLink } from 'react-router-dom';

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
    return (
      <div Class="container-home">
        <h1 class="home-title">Trending today</h1>
        <ul >
          {this.state.movies.map(m => (
            <li key={m.id}>
              <NavLink Class="list-movies" to={`${this.props.match.url}movies/${m.id}`} >
                {m.title || m.name}
              </NavLink>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}
