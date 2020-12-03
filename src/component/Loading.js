import Loader from 'react-loader-spinner';
import React from 'react';

export default class Loaders extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
