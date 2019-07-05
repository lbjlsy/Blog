import { observable, computed, autorun, action, flow } from 'mobx';
import { homeApi } from '../http';

class HomeStore {
  @observable articleList = [];
  @observable articleListLoading = false;
  @observable coverImage = [];
  @observable coverLoading = false;

  constructor() {
    this.articleList = [];
    this.articleListLoading = false
    this.coverImage = []
  }
  getArticleList = flow(function*() {
    try {
      this.articleListLoading = true;
      this.articleList = (yield homeApi.getArticleList()).data || []
    } finally {
      this.articleListLoading = false;
    }
  });
  getCoverList = flow(function* (type) {
    try {
      this.coverLoading = true;
      this.coverImage = (yield homeApi.getCoverList()).data || {}
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
