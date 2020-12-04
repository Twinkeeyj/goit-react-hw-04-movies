import React, { Component } from 'react';
import Axios from 'axios';
import Search from '../component/Serch/Serch';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
import queryString from 'query-string';

export default class MoviesPage extends Component {
  state = {
    shows: [],
    query: null,
  };
  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${query}&language=en-US&page=1&include_adult=false`,
      );

      this.setState({ shows: response.data.results });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
      if (this.state.query !== prevState.query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${this.state.query}&language=en-US&page=1&include_adult=false`,
      );

      this.setState({ shows: response.data.results });
    }
  }

  changeAdress = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
    this.setState({
      query: query,
    });
  };

  render() {

    return (
      <>
        <Search changeAdress={this.changeAdress} />
        <ul>
          {this.state.shows.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
