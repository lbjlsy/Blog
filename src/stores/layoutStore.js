import { observable, computed, autorun, action, flow } from "mobx";
import { layoutApi } from "../http";
import APlayer from "aplayer";

class LayoutStore {
  @observable playerList = [];

  constructor() {
    this.playerList = [];
  }

  getPlayerList = flow(function*() {
    try {
      this.articleList = (yield layoutApi.getPlayerList()).data || [];
      const ap = new APlayer({
        container: document.getElementById("player"),
        fixed: true,
        lrcType: 1,
        audio: this.articleList
      });
      ap.lrc.show();
    } finally {
    }
  });
}

export default new LayoutStore();
