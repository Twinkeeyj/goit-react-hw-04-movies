import React, { Component } from "react";


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
      <div Class="serch-container">
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} Class="serch-input"/>
          <button type="submit" Class="button">Search</button>
        </form>
      </div>
    );
  }
}