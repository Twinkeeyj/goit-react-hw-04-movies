import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from '../component/Cast/Cast';
import Reviews from '../component/Reviews/Reviews';
import Card from "../component/Card/Card"
import routes from "../routes"

import MoviesPages from "../views/MoviesPage"

export default class MovieDetailsPage extends Component {
  state = {
    page: null,
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`,
    );
       this.setState({ page: response.data });
    return;
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    // console.log(MoviesPages)
    if (state && state.from) {
      // <MoviesPages query={state.from.search}/>
      return this.props.history.push(state.from)
    }
    this.props.history.push(routes.HomePage);
  };

  render() {
    const {page}=this.state

    return (
      <>
        {this.state.page && (
          <div>
            <button type="button" onClick={this.handleGoBack}>
              Назад
            </button>
            <div>
                <Card {...page}/>
              <ul>
                  <li>
                    <Link to={`${this.props.match.url}/cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`${this.props.match.url}/revievs`}>Revievs</Link>
                  </li>
                </ul>
              <Switch>
                <Route
                  exact
                  path={`${this.props.match.path}/revievs`}
                  render={props => (
                    <Reviews {...props} id={this.state.page.id} />
                  )}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/cast`}
                  render={props => <Cast {...props} id={this.state.page.id} />}
                />
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}
