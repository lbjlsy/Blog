import { observable, computed, autorun, action, flow } from 'mobx';
import { articleApi } from '../http'
import { message } from '../utils/tools';

class ArticleStore {
  @observable articleDetail = {};

  @observable articleListLoading = false

  constructor() {
    this.articleList = []
  }
  getArticleDetail = flow(function * (id) {
    try {
      console.log(id, 'getArticleDetail id')
      this.articleListLoading = true
      this.articleDetail = (yield articleApi.getArticleDetail(id)).data
    } catch (error) {
      message('unkonw error!')
    } finally {
      this.articleListLoading = false
    }
  })
}

export default new ArticleStore();
