import { GET, POST, PUT } from '../utils/axios';

class ArticleApi {
  getArticleDetail = (id) => GET('getArticleDetail', { id });

  // insertFullSiteGrayData = params => POST('/fullSiteGray', params);

  // modifyFullSiteGrayData = (id, params) => PUT(`/fullSiteGray/${id}`, params);
}

const articleApi = new ArticleApi();

export default articleApi;