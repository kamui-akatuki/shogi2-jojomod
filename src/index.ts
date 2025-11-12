import { Event, GameData, ModBase, MoveEvent, Player, Request, RequestUpdater, StartEvent } from "shogi2-types";

export default class Jojo extends ModBase{
  onStart(_data: GameData, _event: StartEvent, _sender: Player, _updater: RequestUpdater): { r: Request[]; e: Event[]; } {
    console.log("jojo mod is loaded!");
    return {r:[],e:[]};
  }
  onMove(_data: GameData, _event: MoveEvent, _sender: Player, _updater: RequestUpdater): { r: Request[]; e: Event[]; } {
    console.log("だが断る");
    return {r:[],e:[]};
  }
};
