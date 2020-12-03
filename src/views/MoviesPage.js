import React, { Component } from "react";
import Axios from "axios";
import Search from "../component/Serch/Serch";
import {Link} from "react-router-dom"
// import PropTypes from 'prop-types'

export default class MoviesPage extends Component {
  state={
    shows:[],
    query:null,
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.state,prevState);
    if(this.state.query !== prevState.query){
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${this.state.query}&language=en-US&page=1&include_adult=false`
    );

    this.setState({ shows: response.data.results }) ;
  }
  }

  changeAdress = (query) => {
    // console.log(query);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: query=`${query}`
    });
    this.setState({
      query: query
    })
  };

  render() {
    // console.log(this.state.query);
    console.log(this.state.shows);
    return (
      <>
      <Search changeAdress={this.changeAdress} />
      <ul>
        {this.state.shows.map((movie) => (
          <li key={movie.id}>
            <Link to={`${this.props.match.url}/${movie.id}`}>
              {movie.name || movie.title}
            </Link>
          </li>
        ))}
      </ul>

    </>
    );
  }
}
// : <h2>Nothing found for your request </h2>