import { GET, POST, PUT } from "../utils/axios";

class HomeApi {
  getCoverList = () => GET("getCoverList");

  // insertFullSiteGrayData = params => POST('/fullSiteGray', params);

  // modifyFullSiteGrayData = (id, params) => PUT(`/fullSiteGray/${id}`, params);
}

const homeApi = new HomeApi();

export default homeApi;
