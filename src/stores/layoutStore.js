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
      const data = (yield layoutApi.getPlayerList()).data || [];
      this.playerList = data.filter(item => item.status)
      const ap = new APlayer({
        container: document.getElementById("player"),
        fixed: true,
        lrcType: 1,
        audio: this.playerList
      });
      ap.lrc.show();
    } finally {
    }
  });
}

export default new LayoutStore();
