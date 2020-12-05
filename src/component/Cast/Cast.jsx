import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class Cast extends Component {
  state = {
    actores: null,
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`,
    );

    this.setState({ actores: response.data.cast });
  }
  render() {
    return (
      <ul Class="cast-list">
        {this.state.actores ? (
          this.state.actores.map(e => (
            <li key={e.cast_id} Class="cast-list-item" >
              <img
                src={
                  e.profile_path
                    ? `https://image.tmdb.org/t/p/w300${e.profile_path}`
                    : 'https://lh3.googleusercontent.com/proxy/XfJCn8VF_kzZNV5Eke7kf9yUpe6S8GuJlceWjhbecavmJ8prx_5Mfnq0vhDui5jsYrPjkeUfZ8fQ_325_jR50qc8vq-kJiw7nYB2K7zQRSNXItBulBm3KfzOg6y3S7MqsOc'
                }
                alt="" Class="cast-img" width="200" height="300"
              />
              <h2 Class="list-item-text">{e.name}</h2>
              <p Class="list-item-text">character: {e.character}</p>
            </li>
          ))
        ) : (
          <p>Акторів ще не добавили</p>
        )}
      </ul>
    );
  }
}
export default Cast;

Cast.propTypes = {
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
