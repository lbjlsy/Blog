import { observable, computed, autorun, action, flow } from 'mobx';
import { homeApi } from '../http';

class HomeStore {
  @observable articleListLoading = false;
  @observable coverImage = [];
  @observable coverLoading = false;

  constructor() {
    this.articleList = [];
    this.articleListLoading = false
    this.coverImage = []
  }
  
  getCoverList = flow(function* (type) {
    try {
      this.coverLoading = true;
      const data = (yield homeApi.getCoverList()).data || {}
      this.coverImage = data.filter(item => !!item.status)
      this.loadImage(this.coverImage[0].image)
    } finally {
      this.coverLoading = false;
    }
  });
  loadImage = flow(function* (imageUrl) {
    const backgroundDOM = document.getElementById('home_background');
    const background = new Image();
    background.src = imageUrl;
    background.onload = () => {
      if (backgroundDOM) {
        backgroundDOM.style.cssText = `opacity: 1; background-image: url(${
          background.src
        })`;
      }
    };
  });
  
}

export default new HomeStore();
