import { observable, computed, autorun, action, flow } from 'mobx';
import { homeApi } from '../http'
import { message } from '../utils/tools';

class HomeStore {
  @observable articleList = [];

  @observable articleListLoading = false

  constructor() {
    this.articleList = []
  }
  getArticleList = flow(function * () {
    try {
      this.articleListLoading = true
      this.articleList = (yield homeApi.getArticleList()).data
    } catch (error) {
      message('unkonw error!')
    } finally {
      this.articleListLoading = false
    }
  })
  
}

export default new HomeStore();
