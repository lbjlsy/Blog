import { GET, POST, PUT } from '../utils/axios';

class ArticleApi {
  getArticleList = () => GET("getArticleList");
  getTagDetail = (tag) => GET("getTagDetail", tag);
  getArticleDetail = (id) => GET('getArticleDetail', { id });
  getArticleTags = () => GET("getArticleTags")
  // insertFullSiteGrayData = params => POST('/fullSiteGray', params);

  // modifyFullSiteGrayData = (id, params) => PUT(`/fullSiteGray/${id}`, params);
}

const articleApi = new ArticleApi();

export default articleApi;