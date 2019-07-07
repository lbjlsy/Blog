import { observable, computed, autorun, action, flow } from 'mobx';
import { articleApi } from '../http'

class ArticleStore {
  @observable articleList = [];
  @observable articleDetail = {};
  @observable tags = [];
  @observable articleListLoading = false
  @observable isTagsLoading = false

  constructor() {
    this.articleList = []
  }

  @computed get curId() {
    return document.location.pathname.split('/').slice(-1)[0];
  }

  getArticleList = flow(function*() {
    try {
      this.articleListLoading = true;
      this.articleList = (yield articleApi.getArticleList()).data || []
    } finally {
      this.articleListLoading = false;
    }
  });

  getTagDetail = flow(function*() {
    try {
      this.articleListLoading = true;
      this.articleList = (yield articleApi.getTagDetail({ tag: this.curId })).data || []
    } finally {
      this.articleListLoading = false;
    }
  });

  getArticleDetail = flow(function * (id) {
    try {
      this.articleListLoading = true
      this.articleDetail = (yield articleApi.getArticleDetail(this.curId)).data || {}
    } finally {
      this.articleListLoading = false
    }
  })

  getArticleTags = flow(function * (id) {
    try {
      this.isTagsLoading = true
      this.tags = (yield articleApi.getArticleTags()).data || []
    } finally {
      this.isTagsLoading = false
    }
  })
}

export default new ArticleStore();
