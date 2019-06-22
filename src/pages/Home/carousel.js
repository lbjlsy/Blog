import React, { Component } from 'react';
import './carousel.less';
import champion from '../../assets/lebron-champion.jpg';
import gem from '../../assets/gem.jpg';
import hand from '../../assets/lebron-hand.jpeg';
class Carousel extends Component {
  state = {
    imageList: [hand, champion, gem],
    // imageList: ['lebron-hand.jpeg', 'lebron-champion.jpg', 'lebron-hand.jpeg'],
    backgDom: null,
    index: 0
  };
  componentDidMount() {
    let backgDom = document.getElementsByClassName('background')[0];
    this.setState({ backgDom });
  }
  prevImage = () => {
    let { backgDom, index, imageList } = { ...this.state };
    if (index === 0) {
      backgDom.style.backgroundImage = `url(${
        imageList[imageList.length - 1]
      })`;
      this.setState({ index: imageList.length - 1 });
    } else {
      backgDom.style.backgroundImage = `url(${imageList[--index]})`;
      this.setState({ index: index });
    }
  };
  nextImage = () => {
    let { backgDom, index, imageList } = { ...this.state };
    if (index === imageList.length - 1) {
      backgDom.style.backgroundImage = `url(${imageList[0]})`;
      this.setState({ index: 0 });
    } else {
      backgDom.style.backgroundImage = `url(${imageList[++index]})`;
      this.setState({ index: index });
    }
  };
  render() {
    return (
      <div className="carousel">
        <section className="background">
          <h1 className="head-line">Hi, Lebron !</h1>
          <div className="contact">
            <ul>
              <li>
                <a onClick={this.prevImage}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-left-arrow" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/lbjlsy" target="_blank">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-github" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lbjlsy" target="_blank">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-instagram" />
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-wechat" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:lebronjameslsy@gmail.com">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-email" />
                  </svg>
                </a>
              </li>
              <li>
                <a onClick={this.nextImage}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-right-arrow" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Carousel;
