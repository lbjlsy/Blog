import { GET, POST, PUT } from "../utils/axios";

class LayoutApi {
  getPlayerList = () => GET("getPlayerList");

  // insertFullSiteGrayData = params => POST('/fullSiteGray', params);

  // modifyFullSiteGrayData = (id, params) => PUT(`/fullSiteGray/${id}`, params);
}

export default new LayoutApi();
