import React, { Component } from 'react';
import Carousel from './carousel'
class Home extends Component {
  componentWillMount() {
  }
  findNotFound = () => {
    const { history } = this.props;
    // history.push({ pathname: 'blog', query: { id: '123' } });
  };
  render() {
    return (
      <div className="main">
        <Carousel />
        <div style={{height: 1000}}></div>
      </div>
    );
  }
}

export default Home;
