import React from 'react';
import './carousel.less';
import { observer, inject } from 'mobx-react';

@inject('homeStore')
@observer
class Carousel extends React.Component {
  state = {
    backgDom: null,
    index: 0
  };
  componentDidMount() {
    const { homeStore } = this.props
    homeStore.getCoverList()
    let backgDom = document.getElementsByClassName('background')[0];
    this.setState({ backgDom });
  }
  prevImage = () => {
    let { backgDom, index } = this.state
    const { homeStore: { coverImage } } = this.props
    if (index === 0) {
      backgDom.style.backgroundImage = `url(${
        coverImage[coverImage.length - 1].image
      })`;
      this.setState({ index: coverImage.length - 1 });
    } else {
      backgDom.style.backgroundImage = `url(${coverImage[--index].image})`;
      this.setState({ index: index });
    }
  };
  nextImage = () => {
    let { backgDom, index } = this.state
    const { homeStore } = this.props
    const { coverImage } = homeStore
    if (index === coverImage.length - 1) {
      backgDom.style.backgroundImage = `url(${coverImage[0].image})`;
      this.setState({ index: 0 });
    } else {
      backgDom.style.backgroundImage = `url(${coverImage[++index].image})`;
      this.setState({ index: index });
    }
  };
  render() {
    const { homeStore } = this.props
    return (
      <div className="carousel">
        <section className="background" id="home_background">
          <div className="contact">
            <span className="head-line">Life needs passion.</span>
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
