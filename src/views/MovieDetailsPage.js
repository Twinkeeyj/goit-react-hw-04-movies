import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import Cast from '../component/Cast/Cast';
import Reviews from '../component/Reviews/Reviews';
import Card from '../component/Card/Card';
import routes from '../routes';

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
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.HomePage);
  };

  render() {
    const { page } = this.state;
    console.log(page);
    return (
      <>
        {this.state.page && (
          <div Class="container-movie-page">
            <button Class="button" type="button" onClick={this.handleGoBack}>
              Go Back
            </button>
            <div>
              <Card {...page} />
                <h2 Class="cards-info-text">Additional infomation</h2>
              <div Class="container-additional-info">
                <ul class="additional-container-button">
                  <li>
                    <NavLink
                    to={`${this.props.match.url}/Cast`}
                    className="additional-button"
                  >
                    Cast
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to={`${this.props.match.url}/revievs`}
                    className="additional-button"
                  >
                   Revievs
                  </NavLink>

                  </li>
                </ul>
              </div>
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
