import { observable, computed, autorun, action, flow } from 'mobx';
import { articleApi } from '../http'

class ArticleStore {
  @observable articleDetail = {};

  @observable articleListLoading = false

  constructor() {
    this.articleList = []
  }
  getArticleDetail = flow(function * (id) {
    try {
      this.articleListLoading = true
      this.articleDetail = (yield articleApi.getArticleDetail(id)).data || {}
    } finally {
      this.articleListLoading = false
    }
  })
}

export default new ArticleStore();
