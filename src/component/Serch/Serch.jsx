import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Search extends Component {

  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.changeAdress(this.state.value);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}